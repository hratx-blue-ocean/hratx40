import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer.js";
import HeroBanner from "./HeroBanner.js";
import Grid from "@material-ui/core/Grid";
import TopicTiles from "../TopicTiles";
// import TopicTiles from './TopicTiles.js';

const LandingPage = props => {
  console.log(props);
  return (
    <Grid container>
      {/* <Header /> */}
      <Grid item sm={12}>
        <HeroBanner name={"Octavius"} />
      </Grid>
      <TopicTiles
        allTopics={props.allTopics}
        handleTopicTileClick={props.handleTopicTileClick}
        favoritedTopics={props.favoritedTopics}
      />
      <Footer toggleModal={props.toggleModal} />
    </Grid>
  );
};

LandingPage.propTypes = {
  topics: PropTypes.array,
  allTopics: PropTypes.array,
  handleTopicTileClick: PropTypes.func,
  favoritedTopics: PropTypes.array
  // toggleModal: PropTypes.func
};

export default LandingPage;
