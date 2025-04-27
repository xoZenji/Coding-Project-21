// Import necessary React hooks
import React, { useState, useEffect } from 'react';

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track the loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before starting the fetch
      try {
        // Fetch data from the API
        const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
        if (!response.ok) {
          // Throw an error if the response is not OK
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

    fetchTours(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Render a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render an error message if an error occurred during the fetch
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render the list of tours if data is successfully fetched
  return (
    <div>
      <h1>Tours</h1>
      {tours.map((tour) => (
        <div key={tour.id}>
          {/* Display the tour name */}
          <h2>{tour.name}</h2>
          {/* Display the tour information */}
          <p>{tour.info}</p>
          {/* Display the tour price */}
          <p>Price: ${tour.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;