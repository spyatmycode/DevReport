import React, { useState } from 'react';

import NavCss from '../styles/NavBar.module.css';

const NavBar = (props) => {
  return (
    <header className={NavCss.header}>
      <div className={NavCss.logoDiv}>
        <p className={NavCss.logo}>DevReport</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Creat Post</a>
          </li>
          <li>
            <a href='#'>Sign Out</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
