//Task 3: Implement Gallery component that displays list of tours
import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, onRemove }) {
  return (
    <div>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;