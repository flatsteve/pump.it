import React from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';
import './menu.css';

const Menu = (props) => {
  let menuClass = classNames('menu', props.open ? 'menu--open' : 'menu--closed');

  return (
    <div className={menuClass}>
      <ul className="menu__list">
        <li className="menu__item">
          <span onClick={props.toggleMenu} className="menu__item__link">
            Close menu
          </span>
        </li>
        <li className="menu__item">
          <IndexLink to="/" className="menu__item__link" activeClassName="menu__item__link--active">
            Routine
          </IndexLink>
        </li>
        <li className="menu__item">
          <Link to="/profile" className="menu__item__link" activeClassName="menu__item__link--active">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;