import React from 'react';
import { Link } from 'react-router';
import '../styles/layout.css';

const NoMatch = (props) => {
  return (
    <div className="page__center">
      <h1 className="text__header">
        Are you lost?
      </h1>

      <h3>
        The free weights are <Link className="text__link" to="/">that way.</Link>
      </h3>
    </div>
  );
};

export default NoMatch;
