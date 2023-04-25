import quotes from "../../banners/quotes.json";
import React, { useState, useEffect } from "react";


function Home() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
      const randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
      setQuote(randomQuote.quote);
    }, []);

    return (
      <div id="main">
        {/*
            <nav className="tabs">
        <div className="selector"></div>
        <a href="#" className="active"><i className="fab fa-superpowers"></i>HOME</a>
        <a href="#">Story</a>
        <a href="#">Music</a>
        <a href="#">Gallery</a>
      </nav>
        */}

      <div className="wrapper">
        <div id='quotes'>
          <h2>{quote}</h2>
          <a href={`Editor`}><button>EDITOR</button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;