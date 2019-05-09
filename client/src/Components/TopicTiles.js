import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import TopicTile from "./TopicTile";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  }
});

const TopicTiles = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <GridList>
          {props.allTopics.map((topic, i) => (
            <TopicTile
              topic={topic}
              handleTopicTileClick={props.handleTopicTileClick}
              favorites={props.favorites}
              key={i}
            />
          ))}
        </GridList>
      </Grid>
    </div>
  );
};

TopicTiles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicTiles);
