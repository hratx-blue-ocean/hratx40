import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
<<<<<<< HEAD
=======
    fontFamily: "'Comfortaa', cursive",
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 150
  }
});

const ActionsContainer = (props) => {
  const { classes } = props;

  return (
    <div>
<<<<<<< HEAD
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
=======
      <h2 style={{textAlign:"center", borderBottom:"solid", borderColor:"#C4ADAE"}}>{props.currentTopic}</h2>
      <br/>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <Card onClick={() => props.toggleModal(null, 'volunteer')}>
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://photos.smugmug.com/photos/i-N9f6HXQ/0/930c7935/L/i-N9f6HXQ-L.jpg"
                title="Volunteer"
              />
              <CardContent>
<<<<<<< HEAD
                <Typography gutterBottom variant="h5" component="h2">
=======
                {/* <h2>Volunteer</h2> */}
                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
                  Volunteer
                </Typography>
                <Typography component="p">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
<<<<<<< HEAD
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
=======
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className={classes.card} onClick={() => props.toggleModal(null, 'donate')}>
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://photos.smugmug.com/photos/i-KqXtWkW/0/102cd903/L/i-KqXtWkW-L.jpg"
                title="Volunteer"
              />
              <CardContent>
<<<<<<< HEAD
                <Typography gutterBottom variant="h5" component="h2">
=======
                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
                  Donate
                </Typography>
                <Typography component="p">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
<<<<<<< HEAD
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
=======
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className={classes.card} onClick={() => props.toggleModal(null, 'more_info')}>
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://photos.smugmug.com/photos/i-Gt7MN9S/0/8e7f4c2a/L/i-Gt7MN9S-L.jpg"
                title="Volunteer"
              />
              <CardContent>
<<<<<<< HEAD
                <Typography gutterBottom variant="h5" component="h2">
=======
                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
                  General Info
                </Typography>
                <Typography component="p">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
<<<<<<< HEAD
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://photos.smugmug.com/photos/i-FSck9J2/0/75c871c2/L/i-FSck9J2-L.jpg"
                title="Volunteer"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  General Info
                </Typography>
                <Typography component="p">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
=======
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
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