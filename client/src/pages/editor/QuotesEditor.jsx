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
    const quoteObject = { quote: newQuote, author: newAuthor };
    fetch('http://localhost:3001/quote', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteObject),
    })
      .then(() => {
        console.log(quoteObject);
        setQuotes([...quotes, quoteObject]);
      })
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    fetch('http://localhost:3001/quote')
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            "{quote.quote}" - {quote.author}
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