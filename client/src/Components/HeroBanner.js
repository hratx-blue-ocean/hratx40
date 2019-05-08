import React from 'react';
import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Image from './icons/hero.png';

const styles = theme => ({
  heroImage: {
    backgroundImage: `url(${Image})`,
    height: '101vh',
    // width: '100vw',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '1/-1',
    backgroundColor: 'black',
    opacity: '.88',
  },
  heroText: {
    maxWidth: '75%',
    textAlign: 'center',
    fontSize: '2.5vmax',
    color: 'black',
    fontFamily: '"Comfortaa", cursive',
  }
})

const HeroBanner = ({name, classes}) => {

  const getMessage = () => {
    if(name) {
      return (
        <h1>Welcome Back, {name}</h1>
      )
    } else {
      return (
        <h1>Make a Ripple</h1>
      )
    }
  }

  return (  
    <div className={classes.heroImage}>
      <div className={classes.heroText}>
        {getMessage()}
        <h4>throw your pebble</h4>
      </div>
    </div>
  );
}

HeroBanner.propTypes = {
  name: PropTypes.string,
}
 
export default withStyles(styles)(HeroBanner);