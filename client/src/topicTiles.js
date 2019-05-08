import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import pink from "@material-ui/core/colors/pink";
import TopicTile from "./topicTile";

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
          {props.allTopics.map(topic => (
            <TopicTile
              topic={topic}
              handleTopicTileClick={props.handleTopicTileClick}
              favoritedTopics={props.favoritedTopics}
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
