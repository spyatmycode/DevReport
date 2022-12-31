import React from 'react';
import { Link } from 'react-router-dom'
import NavCss from '../styles/NavBar.module.css';

const NavBar = (props) => {
  return (
    <header className={NavCss.header}>
      <div className={NavCss.logoDiv}>
        DevReport
      </div>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Create Post</Link>
          </li>
          <li>
            <Link>Sign Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
