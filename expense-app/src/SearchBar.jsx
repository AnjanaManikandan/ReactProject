import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Make a fetch request to the Edamam API with the user's query
    fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the recipe data here and update the RecipeList component
      })
      .catch((error) => {
        console.error('Error fetching recipe data:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
