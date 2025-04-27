//Task 2: Created TourCard component
import React from 'react';

function TourCard({ tour, onRemove }) {
  // Destructure the tour object to extract relevant properties
  const { id, name, info, image, price } = tour;

  return (
    <div>
      {/* Display the tour image */}
      <img src={image} alt={name} />
      <div>
        {/* Display the tour name */}
        <h2>{name}</h2>
        {/* Display the tour price */}
        <p>Price: ${price}</p>
        {/* Display the tour information */}
        <p>{info}</p>
        {/* Button to remove the tour */}
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;