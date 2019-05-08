import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

// import Header from './Header.js';
import HeroBanner from './HeroBanner.js';
// import TopicTiles from './TopicTiles.js';
// import Footer from './Footer.js';


const LandingPage = ({ topics, classes }) => {
  return (
    <Grid container>
      {/* <Header /> */}
      <Grid item sm={12}>
        <HeroBanner name={'Octavius'} />
      </Grid>
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

export default LandingPage;