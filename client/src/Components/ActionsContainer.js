import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


const ActionsContainer = (props) => {
  const { classes } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="h6">
            Ratings Summary
          </Typography>
          <Graph 
            ratings={props.ratings} 
            ratingAverage={props.ratingAverage} 
            reviews={props.reviews}
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="h6">
            Pros
          </Typography>
          <GraphPros
            pros={props.pros} 
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="h6">
            Cons
          </Typography>
          <GraphCons
            cons={props.cons} 
          />
        </Paper>
      </Grid>
    </Grid>
  )
}