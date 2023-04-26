import quotes from '../../banners/quotes.json';
import React, { useState, useEffect } from "react";

const QuotesEditor = () => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleDelete = (index) => {
    const newQuotes = quotes.filter((_, i) => i !== index);
    setQuotes(newQuotes);
    saveToFile(newQuotes);
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuotes = [...quotes, { quote: newQuote, autor: newAuthor }];
    setQuotes(newQuotes);
    setNewQuote('');
    setNewAuthor('');
    saveToFile(newQuotes);
  };

  const saveToFile = async (newQuotes) => {
    const response = await fetch('api/saveQuotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quotes: newQuotes }),
    });
  
    if (!response.ok) {
      console.error('Failed to save quotes');
    }
  };
  

  useEffect(() => {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
      setQuotes(JSON.parse(storedQuotes));
    } else {
      setQuotes(quotesData.quotes); 
      localStorage.setItem('quotes', JSON.stringify(quotesData.quotes));
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
};

export default QuotesEditor;