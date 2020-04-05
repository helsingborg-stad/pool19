import React from 'react';
import './Hero.css';
import COVER_JPG from '../assets/images/cover.jpeg';
import Grid from '@material-ui/core/Grid';

const divStyle = {
  backgroundImage: `url(${COVER_JPG})`,
};

const Hero = () => (
  <div className="section section--hero u-text-center u-text-white" style={divStyle}>
    <div className="hero-content">
      <h1 className="hero">
        Is your business in need? <br />
        Get listed for help.
      </h1>
      <p className="large">
        If you’re running a small business and need support during this corona crisis, get listed
        here so that others can support your.
      </p>
      <Grid container justify={'center'}  spacing={2}>
        <Grid item>
          <a className="btn btn--green" href="#ineedsupport">I need support 🙏🏻</a>
        </Grid>
        <Grid item>
          <a className="btn btn--blue" href="#iwanttosupport">i want to support 💛</a>
        </Grid>
      </Grid>
      {/* <ul className="unlist">
        <li>
          
        </li>
        <li>
          
        </li>
      </ul> */}
    </div>
  </div>
);

export default Hero;
