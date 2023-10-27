import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import './App.css';
import Joke from './components/Joke'; // Adjust the path to match your project structure
import Quote from './components/Quote'; // Adjust the path to match your project structure
import GIF from './components/GIF'; // Adjust the path to match your project structure

function App() {
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(true);

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGreeting = () => {
    if (username.trim() !== '') {
      setShowPopup(false);
    }
  };

  return (
    <Router>
      <div className="App">
        {showPopup && (
          <div className="popup">
            <h2>Welcome to My App!</h2>
            <p>Please enter your name:</p>
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={handleNameChange}
            />
            <button className="fancy-button" onClick={handleGreeting}>
              Submit
            </button>
          </div>
        )}

        {!showPopup && (
          <div>
            <h1 className="greeting">Hello, {username}!</h1>
            <div className="navigation">
              <Link to="/GIF">
                <button className="fancy-button">Search for a GIF</button>
              </Link>
              <Link to="/joke">
                <button className="fancy-button">Get a Joke</button>
              </Link>
              <Link to="/quote">
                <button className="fancy-button">Get a Quote</button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/GIF" element={<GIF />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
