import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ActionsContainer from './ActionsContainer';
<<<<<<< HEAD
=======
import NewsFeedContainer from "./Newsfeed.js"
import Footer from './Footer.js'
import Header from './Header.js'
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e

const styles = theme => ({
  root: {
    flexGrow: 1,
<<<<<<< HEAD
  },
=======
    padding: theme.spacing.unit * 3,
    marginTop: 50,
    justifyContent: "space-around"
  },
  container: {
    backgroundColor: '#fff'
  }
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
});

const TopicPageContainer = (props) => {
  const { classes } = props;

  return (
<<<<<<< HEAD
    <div>
=======
    <div >
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
      <Grid 
        container 
        spacing={16}
        className={classes.root}  
      >
<<<<<<< HEAD
        <Grid item xs={12} sm={6}>
          <ActionsContainer />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <NewsFeedContainer /> */}
        </Grid>
=======
        <Grid item xs={12} sm={4} className={classes.container}>
          <ActionsContainer toggleModal={props.toggleModal} currentTopic={props.currentTopic} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <NewsFeedContainer currentTopic={props.currentTopic} />
          </div>
        </Grid>
      <Footer 
        toggleModal={props.toggleModal} 
        footerPageChange={props.footerPageChange}
      />
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
      </Grid>
    </div>
  )
}

TopicPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicPageContainer);