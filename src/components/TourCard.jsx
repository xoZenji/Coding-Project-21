//Task 2: Created TourCard component
import React from 'react';

function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;