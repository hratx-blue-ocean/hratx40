import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Comfortaa', cursive",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: '150px'
  }
});

const ActionsContainer = (props) => {
  const { classes } = props;

  return (
    <div>
      <h2 style={{textAlign:'center', borderBottom:'solid', borderColor:'#C4ADAE'}}>{props.currentTopic}</h2>
      <br/>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Card onClick={() => props.toggleModal(null, 'volunteer')}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://photos.smugmug.com/photos/i-N9f6HXQ/0/930c7935/L/i-N9f6HXQ-L.jpg'
                title='Volunteer'
              />
              <CardContent>
                <Typography className={classes.root} gutterBottom variant='h5' component='h2'>
                  Volunteer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card} onClick={() => props.toggleModal(null, 'donate')}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://photos.smugmug.com/photos/i-KqXtWkW/0/102cd903/L/i-KqXtWkW-L.jpg'
                title='Volunteer'
              />
              <CardContent>
                <Typography className={classes.root} gutterBottom variant='h5' component='h2'>
                  Donate
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className={classes.card} onClick={() => props.toggleModal(null, 'more_info')}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://photos.smugmug.com/photos/i-Gt7MN9S/0/8e7f4c2a/L/i-Gt7MN9S-L.jpg'
                title='Volunteer'
              />
              <CardContent>
                <Typography className={classes.root} gutterBottom variant='h5' component='h2'>
                  General Info
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

ActionsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionsContainer);