import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomQuote.css'

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Erro ao buscar citação:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className='container'>
      <div className='quote-box'>
        <p className='quote'>"{quote}"</p>
        <p className='author'>- {author}</p>
        <button onClick={handleNewQuote} className='button'>Nova Citação</button>
      </div>
    </div>
  );
};


export default RandomQuote;
