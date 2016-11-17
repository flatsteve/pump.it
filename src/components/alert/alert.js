import React from 'react';
import './alert.css';

const Alert = (props) => {
  return (
    <div className="alert">
      <p className="alert__message">
        {props.children}
      </p>
    </div>
  );
};

export default Alert;