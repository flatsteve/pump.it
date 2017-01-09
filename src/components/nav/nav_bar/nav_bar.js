import React from 'react';
import { Link } from 'react-router';
import './nav_bar.css';

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <h1 className="nav-bar__title text__header">
        <Link to="/">
          Pump.it
          </Link>
      </h1>

      <i className="nav-bar__menu-icon"
        onClick={props.toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14"><path fill="#E4509B" d="M0 0h20.11v1.978H0V0zm0 5.934h20.11v1.978H0V5.934zm0 5.935h20.11v1.976H0V11.87z" /></svg>
      </i>
    </div>
  );
}

