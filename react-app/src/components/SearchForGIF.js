import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchForGIF = ({ apiKey, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Make an API request to fetch data based on the user's search query
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        onSearch(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for GIFs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginLeft: '10px' }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchForGIF;

