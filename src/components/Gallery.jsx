import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, onRemove }) {
  // Map over the tours array and render a TourCard for each tour
  return (
    <div>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;