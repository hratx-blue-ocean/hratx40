import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.js';
import HeroBanner from './HeroBanner.js';
import Grid from '@material-ui/core/Grid';
import TopicTiles from './TopicTiles';
import SearchAppBar from './Header';

const LandingPage = props => {
  return (
    <Grid>
      <SearchAppBar
        toggleModal={props.toggleModal}
        handlePageChange={props.handlePageChange.bind(props)}
        logout={props.logout}
        isLogged={props.isLogged}
        firstName={props.firstName}
        handleSearchSubmit={props.handleSearchSubmit}
      />
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
        handlePageChange={props.handlePageChange}
      />
    </Grid>
  );
};

LandingPage.propTypes = {
  topics: PropTypes.array
  // toggleModal: PropTypes.func
};

export default LandingPage;
