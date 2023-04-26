import quotes from '../../banners/quotes.json'; 
import React, { useState, useEffect } from "react";

const QuotesEditor = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch(quotes)
          .then((response) => response.json())
          .then((data) => setQuotes(data.quotes));
      }, []);

      const handleDelete = (index) => {
        const newQuotes = quotes.filter((_, i) => i !== index);
        setQuotes(newQuotes);
        saveToLocalStorage(newQuotes);
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const newQuotes = [...quotes, { quote: newQuote, autor: newAuthor }];
        setQuotes(newQuotes);
        setNewQuote('');
        setNewAuthor('');
        saveToLocalStorage(newQuotes);
      };

      const saveToLocalStorage = (newQuotes) => {
        localStorage.setItem('quotes', JSON.stringify(newQuotes));
      };

      useEffect(() => {
        const storedQuotes = localStorage.getItem('quotes');
        if (storedQuotes) {
          setQuotes(JSON.parse(storedQuotes));
        } else {
          fetch('/quotes.json')
            .then((response) => response.json())
            .then((data) => {
              setQuotes(data.quotes);
              localStorage.setItem('quotes', JSON.stringify(data.quotes));
            });
        }
      }, []);

      return (
        <div>
          <h2>Quotes</h2>
          <ul>
            {quotes.map((quote, index) => (
              <li key={index}>
                "{quote.quote}" - {quote.autor}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <h2>Add Quote</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Quote:
              <input type="text" value={newQuote} onChange={(e) => setNewQuote(e.target.value)} />
            </label>
            <label>
              Author:
              <input type="text" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
            </label>
            <input type="submit" value="Add Quote" />
          </form>
        </div>
      );
}

export default QuotesEditor;