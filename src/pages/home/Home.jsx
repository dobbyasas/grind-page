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