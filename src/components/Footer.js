import React from 'react';

import footerCss from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <h2 className={footerCss.footerHeading}>DevReport</h2>
      <p>DevReport &copy; 2022. All rights reserved </p>
      <svg height='100' width='100'>
        <circle
          cx='50'
          cy='50'
          r='25'
          stroke='black'
          stroke-width='0.1'
          fill='black'
        />
      </svg>
      <svg height='100' width='100'>
        <circle
          cx='25'
          cy='50'
          r='25'
          stroke='black'
          stroke-width='0.1'
          fill='black'
        />
      </svg>
      <svg height='100' width='100'>
        <circle
          cx='25'
          cy='50'
          r='25'
          stroke='black'
          stroke-width='0.1'
          fill='black'
        />
      </svg>
      <svg height='100' width='100'>
        <circle
          cx='25'
          cy='50'
          r='25'
          stroke='black'
          stroke-width='0.1'
          fill='black'
        />
      </svg>  
    </footer>
  );
};

export default Footer;
