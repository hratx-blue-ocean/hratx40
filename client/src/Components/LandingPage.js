<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

// import Header from './Header.js';
import HeroBanner from './HeroBanner.js';
// import TopicTiles from './TopicTiles.js';
// import Footer from './Footer.js';

const LandingPage = ({topics}) => {
  return (  
    <div className={'landingPage'}>
      {/* <Header /> */}
      <HeroBanner name={''}/>
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
=======
import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer.js";
import HeroBanner from "./HeroBanner.js";
import Grid from "@material-ui/core/Grid";
import TopicTiles from "./TopicTiles";

const LandingPage = props => {
  return (
    <Grid>
      {/* <Header /> */}
      <Grid item sm={12}>
        <HeroBanner name={props.name} />
      </Grid>
      <Grid style={{ paddingBottom: 5 }}>
        <TopicTiles
          displayTopics={props.displayTopics}
          handleTopicTileClick={props.handleTopicTileClick}
          favorites={props.favorites}
        />
      </Grid>
      <Footer
        toggleModal={props.toggleModal}
        footerPageChange={props.footerPageChange}
      />
    </Grid>
  );
};

LandingPage.propTypes = {
  topics: PropTypes.array
  // toggleModal: PropTypes.func
};

export default LandingPage;
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
