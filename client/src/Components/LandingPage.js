import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// import Header from './Header.js';
import HeroBanner from './HeroBanner.js';
// import TopicTiles from './TopicTiles.js';
// import Footer from './Footer.js';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  }
})

const LandingPage = ({topics, classes}) => {
  return (  
    <Grid className={classes.container}>
      {/* <Header /> */}
      <HeroBanner name={'Octavius'}/>
      {/* {topics.map((topic, i) => (
        <TopicTiles topic={topic} key={i}/>
      ))} */}
      {/* <Footer /> */}
    </Grid>
  );
}

LandingPage.propTypes = {
  topics: PropTypes.array,
}
 
export default withStyles(styles)(LandingPage);