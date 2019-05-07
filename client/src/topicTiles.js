import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import pink from '@material-ui/core/colors/pink';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
  <Grid container className = {topicTilesGrid} spacing={16}>
  <Grid item xs
  </Grid>
  <div onClick={props.handleClick}>
    <Grid />;
  </div>;
};

export default TopicTiles;
