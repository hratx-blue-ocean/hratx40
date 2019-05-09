import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer.js";
import HeroBanner from "./HeroBanner.js";
import Grid from "@material-ui/core/Grid";
import TopicTiles from "./TopicTiles";

const LandingPage = props => {
  return (
    <Grid container>
      {/* <Header /> */}
      <Grid item sm={12}>
        <HeroBanner name={props.name} />
      </Grid>
      <Grid style={{ paddingBottom: 5 }}>
        <TopicTiles
          allTopics={props.allTopics}
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
  topics: PropTypes.array,
  allTopics: PropTypes.array,
  handleTopicTileClick: PropTypes.func,
  favoritedTopics: PropTypes.array
  // toggleModal: PropTypes.func
};

export default LandingPage;
