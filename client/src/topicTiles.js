import React from "react";
import tile from "..src/topicTile";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

// const topicTiles = props.topicTiles.map(tile => {});

const TopicTiles = props => {
  <div onClick={props.handleClick}>
    <Grid />;
  </div>;
};

export default TopicTiles;
