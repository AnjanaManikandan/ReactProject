import axios from 'axios';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const buttonStyle = {
  backgroundColor: 'rgb(177, 112, 196)',
  color: 'white',
};

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/', {
        headers: {
          'X-RapidAPI-Key': '4f3da5f8c3msh090e2255c0bd943p1ecb44jsn73b40ce33e21',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        },
      });
      setQuote(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card style={{ maxWidth: 400, margin: 'auto', marginTop: '20px', padding: '10px' }}>
      <CardContent>
          <h2 style={{fontSize:28, fontWeight: 'bold', textTransform: 'uppercase', color: 'white', textShadow: '2px 2px 5px rgba(0, 0, 0, 1)', textAlign: 'center'}}>Get a Random Quote</h2>

        <br></br>
        <Button variant="contained" style={buttonStyle} onClick={fetchRandomQuote}>
          Get Quote
        </Button>
        {quote && (
          <div style={{ marginTop: '20px' }}>
            <Typography variant="body1">{quote}</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RandomQuote;
