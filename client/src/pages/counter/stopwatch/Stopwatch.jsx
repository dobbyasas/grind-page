import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const startDate = new Date(Date.UTC(2017, 3, 1));
    const now = new Date();

    const secondsElapsed = Math.floor((now - startDate) / 1000);

    setDays(Math.floor(secondsElapsed / 86400));
    setHours(Math.floor((secondsElapsed % 86400) / 3600));
    setMinutes(Math.floor((secondsElapsed % 3600) / 60));
    setSeconds(secondsElapsed % 60);
  }, []);

  const startCounting = () => {
    if (!countdown) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds < 59) {
            return prevSeconds + 1;
          } else {
            setMinutes((prevMinutes) => {
              if (prevMinutes < 59) {
                return prevMinutes + 1;
              } else {
                setHours((prevHours) => {
                  if (prevHours < 23) {
                    return prevHours + 1;
                  } else {
                    setDays((prevDays) => prevDays + 1);
                    return 0;
                  }
                });
                return 0;
              }
            });
            return 0;
          }
        });
      }, 1000);
      setCountdown(interval);
    }
  };

  const pauseCounting = () => {
    if (countdown) {
      clearInterval(countdown);
      setCountdown(null);
    }
  };

  const pad = (number) => {
    return ("0" + number).slice(-2);
  };

  const [isRunning, setIsRunning] = useState(false);

  const toggleCounting = () => {
    if (isRunning) {
      pauseCounting();
    } else {
      startCounting();
    }
    setIsRunning(!isRunning);
  };
  
  return (
    <section className="wrapper">
      <section id="countdown-container" className="countdown-container">
        <article id="js-countdown" className="countdown">
          <section id="js-days" className="number">{pad(days)}</section>
          <section id="js-separator" className="separator">:</section>
          <section id="js-hours" className="number">{pad(hours)}</section>
          <section id="js-separator" className="separator">:</section>
          <section id="js-minutes" className="number">{pad(minutes)}</section>
          <section id="js-separator" className="separator">:</section>
          <section id="js-seconds" className="number">{pad(seconds)}</section>
        </article>
      </section>
      <div className="button-wrapper">
        <section className="buttons-container">
          <button onClick={toggleCounting}>{isRunning ? 'Pause' : 'Start'}</button>
        </section>
      </div>
    </section>
  );
  
}

export default Stopwatch;
