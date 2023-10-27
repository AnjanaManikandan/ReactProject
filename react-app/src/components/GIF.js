import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchForGIF from './SearchForGIF';

function GIF (){
    
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'dJLKPb1pomgL4o0T9tfyc9RfVHAwPb9N';

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Container maxWidth="md">
      <div className="App">
        <Typography variant="h3" align="center" gutterBottom>
          <h1>Find a GIF!</h1>
        </Typography>
        <SearchForGIF apiKey={apiKey} onSearch={handleSearch} />
        <div className="search-results">
          {searchResults.map((result) => (
            <img
              key={result.id}
              src={result.images.fixed_height.url}
              alt={result.title}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
export default GIF;