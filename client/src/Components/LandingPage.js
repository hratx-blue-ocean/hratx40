import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.js';
import HeroBanner from './HeroBanner.js';
import TopicTiles from './TopicTiles.js';
import Footer from './Footer.js';

const LandingPage = ({topics}) => {
  return (  
    <div>
      <h1>Hello world</h1>
      {/* <Header /> */}
      {/* <HeroBanner /> */}
      {/* {topics.map((topic, i) => (
        <TopicTiles topic={topic} key={i}/>
      ))} */}
      {/* <Footer /> */}
    </div>
  );
}

LandingPage.propTypes = {
  topics: PropTypes.array,
}
 
export default LandingPage;