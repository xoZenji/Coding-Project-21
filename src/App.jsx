import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track whether data is being loaded
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Function to fetch tours data from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) {
        // Throw an error if the response is not successful
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json(); // Parse the JSON response
      setTours(data); // Update the tours state with the fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      // Catch and store any errors that occur during the fetch
      setError(err.message);
    } finally {
      // Set loading to false after the fetch is complete
      setLoading(false);
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []); // Empty dependency array ensures this runs only once

  // Function to remove a tour by filtering it out of the tours array
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Render a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render an error message if an error occurred during the fetch
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render a message and a refresh button if no tours are left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  // Render the Gallery component with the tours data and removeTour function
  return (
    <div>
      <h1>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;