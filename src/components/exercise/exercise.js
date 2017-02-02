import React from 'react';
import './exercise.css';

const Exercise = (props) => {
  let { exercise } = props;

  return (
    <div className="exercise">
      <p className="exercise__title">{exercise.name}</p>
      <p className="exercise__category">({exercise.category})</p>
    </div>
  );
};

export default Exercise;
