import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.js'
import HeroBanner from './HeroBanner.js';
// import TopicTiles from './TopicTiles.js';
// import Footer from './Footer.js';

const LandingPage = (props) => {
  return (  
    <div className={'landingPage'}>
      {/* <Header /> */}
      <HeroBanner name={''}/>
      {/* {topics.map((topic, i) => (
        <TopicTiles topic={topic} key={i}/>
      ))} */}
      <Footer toggleModal={props.toggleModal} />
    </div>
  );
}

LandingPage.propTypes = {
  topics: PropTypes.array,
}
 
export default LandingPage;