import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IntegrationAutoSuggest from '../Components/Search.js'

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: '1',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    height: '50px',
    alignItems: 'center',
    cursor: 'pointer',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

function SearchAppBar(props) {
  const { classes } = props;

  console.log(props.isLogged);

  return (
    <div className={classes.root} style={{position: 'fixed', top: 0}}>
      <AppBar position="static" style={{background: '#C4ADAE'}}>
        <Toolbar className={classes.header}>
          <a href='_' className={classes.title} onClick={(e) => props.handlePageChange(e, 'home')}>
            <img alt='' src="brand_assets/logo_only_transparent.png" style={{width: "50px", height: "50px"}}/>
            <img alt='' src="brand_assets/text_only_transparent.png" style={{height: "20px", paddingLeft: "8px", paddingRight: "8px"}}/>
          </a>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
            <IntegrationAutoSuggest handleSearchSubmit={props.handleSearchSubmit}/>
          </div>
          {props.isLogged ? 
            (
              <div>
                <span>
                  What's up, {props.firstName}! 
                </span>&nbsp;&nbsp;
                <Button onClick={(event) => {props.logout(event)}} className={classes.button}>
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Button onClick={(event) => {props.toggleModal(event,"login")}} className={classes.button}>
                  Login
                </Button>
                <Button onClick={(event) => {props.toggleModal(event,"signup")}} className={classes.button}>
                  Signup
                </Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);