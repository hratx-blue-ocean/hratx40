import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ActionsContainer from './ActionsContainer';
import NewsFeedContainer from "./Newsfeed.js"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const TopicPageContainer = (props) => {
  const { classes } = props;

  return (
    <div style={{position:"fixed"}}>
      <Grid 
        container 
        spacing={16}
        className={classes.root}  
      >
        <Grid item xs={12} sm={6}>
          <ActionsContainer />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <NewsFeedContainer currentTopic={props.currentTopic} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

TopicPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicPageContainer);