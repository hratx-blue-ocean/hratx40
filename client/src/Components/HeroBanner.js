import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

const HeroBanner = ({name}) => {

  const getMessage = () => {
    if(name) {
=======
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroImage: {
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1491382825904-a4c6dca98e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format})',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'black',
    opacity: '.95',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    textAlign: 'center',
    fontSize: '2.5vmax',
    color: 'black',
    paddingBottom: '150px'
  }
})

const HeroBanner = ({ name, classes }) => {

  const getMessage = () => {
    if (name) {
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
      return (
        <h1>Welcome Back, {name}</h1>
      )
    } else {
      return (
        <h1>Make a Ripple</h1>
      )
    }
  }

<<<<<<< HEAD
  return (  
    <div className={'heroImage'}>
      <div className={'heroText'}>
        {getMessage()}
      </div>
    </div>
=======
  return (
    <Grid container className={classes.heroImage}>
      <Grid item xs={8} className={classes.heroText}>
        {getMessage()}
        <h4>throw your pebble</h4>
      </Grid>
    </Grid>
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
  );
}

HeroBanner.propTypes = {
  name: PropTypes.string,
}
<<<<<<< HEAD
 
export default HeroBanner;
=======

export default withStyles(styles)(HeroBanner);
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
