import React from 'react';

import footerCss from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className='invisible bottom-0 pt-4 justify-center-center flex flex-col'>
      <h2 className={footerCss.footerHeading}>DevReport</h2>
      <p>DevReport &copy; 2022. All rights reserved </p>
      <div>
        <svg height='100' width='100'>
          <circle
            cx='50'
            cy='50'
            r='25'
            stroke='black'
            strokeWidth='0.1'
            fill='black'
          />
        </svg>
        <svg height='100' width='100'>
          <circle
            cx='25'
            cy='50'
            r='25'
            stroke='black'
            strokeWidth='0.1'
            fill='black'
          />
        </svg>
        <svg height='100' width='100'>
          <circle
            cx='25'
            cy='50'
            r='25'
            stroke='black'
            strokeWidth='0.1'
            fill='black'
          />
        </svg>
        <svg height='100' width='100'>
          <circle
            cx='25'
            cy='50'
            r='25'
            stroke='black'
            strokeWidth='0.1'
            fill='black'
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
