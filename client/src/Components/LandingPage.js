import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.js'
import HeroBanner from './HeroBanner.js';
import Grid from '@material-ui/core';
// import TopicTiles from './TopicTiles.js';
// import Footer from './Footer.js';

const LandingPage = (props) => {
  return (  
    <Grid container>
      {/* <Header /> */}
      <Grid item sm={12}>
        <HeroBanner name={'Octavius'}/>
      </Grid>
      {/* {props.topics.map((topic, i) => (
        <TopicTiles topic={topic} key={i}/>
      ))} */}
      <Footer toggleModal={props.toggleModal} />
    </Grid>
  );
}

LandingPage.propTypes = {
  topics: PropTypes.array,
  toggleModal: PropTypes.func,
}
 
export default LandingPage;