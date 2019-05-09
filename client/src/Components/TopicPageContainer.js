import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ActionsContainer from './ActionsContainer';
import NewsFeedContainer from "./Newsfeed.js"
import Footer from './Footer.js'
import Header from './Header.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 50
  },
  container: {
    backgroundColor: '#fff'
  }
});

const TopicPageContainer = (props) => {
  const { classes } = props;

  return (
    <div>
      <Grid 
        container 
        spacing={16}
        className={classes.root}  
      >
        <Grid item xs={12} sm={6} className={classes.container}>
          <ActionsContainer toggleModal={props.toggleModal} currentTopic={props.currentTopic} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{overflow:"scroll", height:"100vh"}}>
            <NewsFeedContainer currentTopic={props.currentTopic} />
          </div>
        </Grid>
      </Grid>
      <Footer toggleModal={props.toggleModal} />
    </div>
  )
}

TopicPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicPageContainer);