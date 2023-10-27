import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

function App() {
  return (
    <Container maxWidth="md">
      <div className="App">
        <Typography variant="h3" align="center" gutterBottom>
          Recipe App
        </Typography>
        <SearchBar />
        <RecipeList />
      </div>
    </Container>
  );
}

export default App;

