import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const categories = [
  { name: 'Any', className: 'category-any' },
  { name: 'Misc', className: 'category-misc' },
  { name: 'Programming', className: 'category-programming' },
  { name: 'Dark', className: 'category-dark' },
  { name: 'Pun', className: 'category-pun' },
  { name: 'Spooky', className: 'category-spooky' },
  { name: 'Christmas', className: 'category-christmas' },
];

const JokeAccordion = () => {
  const [selectedCategory, setSelectedCategory] = useState('Any');
  const [joke, setJoke] = useState('');

  // Function to fetch a joke based on the selected category
  const fetchJokeByCategory = () => {
    // Construct the URL based on the selected category
    const apiUrl = `https://v2.jokeapi.dev/joke/${selectedCategory}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setJoke(data.joke))
      .catch((error) => console.error(error));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchJokeByCategory();
  };

  return (
    <div>
<h2 style={{fontSize:28,fontWeight: 'bold', textTransform: 'uppercase', color: 'white', textShadow: '2px 2px 5px rgba(0, 0, 0, 1)', textAlign: 'center'}}>Choose a Joke Category</h2>
      {categories.map((category) => (
        <Accordion key={category.name}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${category.name}-content`}
            id={`${category.name}-header`}
          >
            <Typography className={category.className} style={{ fontFamily: 'CustomFont' }}>{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <button onClick={() => handleCategoryChange(category.name)}>Get Joke</button>
              <p>{joke}</p>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default JokeAccordion;

