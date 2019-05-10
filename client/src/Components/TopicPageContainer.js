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
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a

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
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
});

const TopicPageContainer = (props) => {
  const { classes } = props;

  return (
<<<<<<< HEAD
    <div>
=======
    <div >
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
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
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
      </Grid>
    </div>
  )
}

TopicPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicPageContainer);