import React from 'react';
import { NavLink } from 'react-router-dom';
import Person from '@mui/icons-material/Person';

const Nav = () => (
  <nav className="nav-bar">
    <div className="nav-brand">Bookstore CMS</div>
    <ul className="nav-links">
      <li className="nav-link active"><NavLink to="/">BOOKS</NavLink></li>
      <li className="nav-link"><NavLink to="/categories">CATEGORIES</NavLink></li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons"><Person /></span>
    </button>
  </nav>
);

export default Nav;
