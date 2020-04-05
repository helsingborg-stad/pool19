import React from 'react';
import './Hero.css';

const Hero = () => (
  <div className="section section--hero u-text-center u-text-white">
    <div className="hero-content">
      <h1 className="hero">
        Is your business in need? <br />
        Get listed for help.
      </h1>
      <p className="large">
        If you’re running a small business and need support during this corona crisis, get listed
        here so that others can support your.
      </p>
      <ul className="unlist">
        <li>
          <a href="#ineedsupport">I need support 🙏🏻</a>
        </li>
        <li>
          <a href="#iwanttosupport">i want to support 💛</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Hero;
