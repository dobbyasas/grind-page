import React, { useState, useEffect } from "react";

const QuotesEditor = () => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/quote/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        res.json().then((data) => setQuotes(quotes.filter((quote) => quote.id !== Number(data.id))));
      })
      .catch((err) => console.error(err));
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
      .then((res) => {
        res.json().then((data) => setQuotes([...quotes, data]));
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
      <h2>Quotes:</h2> 
      
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            "{quote.quote}" - {quote.author}
            <button onClick={() => handleDelete(quote.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="bottomButton"><a href={`/`}><button>HOME</button></a></div>
    </div>
  );
};

export default QuotesEditor;