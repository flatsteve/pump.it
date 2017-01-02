import React from 'react';
import { Link } from 'react-router';
import './app_header.css';

export default function AppHeader(props) {
  return (
    <div className="app-header">
      <h1 className="app-header__title text__header">
        <Link to="/">
          Pump.it
          </Link>
      </h1>

      <h4 className="app-header__sub-title text__header">
        I'll be your instructor
        </h4>

      <i className="app-header__menu-icon"
        onClick={props.toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14"><path fill="#E4509B" d="M0 0h20.11v1.978H0V0zm0 5.934h20.11v1.978H0V5.934zm0 5.935h20.11v1.976H0V11.87z" /></svg>
      </i>
    </div>
  );
}

