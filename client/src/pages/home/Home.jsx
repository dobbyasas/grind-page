import React, { useState, useEffect } from "react";
import './Home.css';

function Home() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("");

    const fetchQuotes = async () => {
      try {
        const res = await fetch('http://localhost:3001/quote');
        const quotes = await res.json();
        return quotes;
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchQuotes().then((quotes) => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote.quote);
      });
    }, []);

    return (
      <div id="main">
      <div className="wrapper">
        <div id='quotes'>
          <h2>{quote}</h2>
          
        </div>
      </div>
      <div className="navigationContainer">
        <div className="bottomButton"><a href={`/`}><button>HOME</button></a></div>
        <div className="bottomButton"><a href={`Editor`}><button>Quotes Editor</button></a></div>
        <div className="calendar"><a href={`Counter`}><button>Time counter</button></a></div>
      </div>
    </div>
  );
}

export default Home;