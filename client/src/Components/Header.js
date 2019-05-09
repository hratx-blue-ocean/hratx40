import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: '1',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
    display: 'flex',
    flexDirection: 'row',
    height: '50px',
    alignItems: 'center',
    cursor: 'pointer',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
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
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
});

function SearchAppBar(props) {
  const { classes } = props;

  const goHome = (e) => {
    e.target.name = 'home';
    props.handlePageChange(e);
  }

  return props.isLogged ? (
    <div className={classes.root} style={{position: 'fixed', top: 0}}>
    <AppBar position="static" style={{background: '#C4ADAE'}}>
      <Toolbar>
        <a href='_' className={classes.title} onClick={goHome}>
          <img alt='' src="brand_assets/logo_only_transparent.png" style={{width: "50px", height: "50px"}}/>
          <img alt='' src="brand_assets/text_only_transparent.png" style={{height: "20px", paddingLeft: "8px", paddingRight: "8px"}}/>
        </a>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            {/* <SearchIcon /> */}
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <Button onClick={(event) => {props.logout(event)}} className={classes.button}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  </div>
  ) : (
    <div className={classes.root} style={{position: 'fixed', top: 0}}>
      <AppBar position="static" style={{background: '#C4ADAE'}}>
        <Toolbar>
          <a href='_' className={classes.title} onClick={goHome}>
            <img alt='' src="brand_assets/logo_only_transparent.png" style={{width: "50px", height: "50px"}}/>
            <img alt='' src="brand_assets/text_only_transparent.png" style={{height: "20px", paddingLeft: "8px", paddingRight: "8px"}}/>
          </a>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {/* <SearchIcon /> */}
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <Button onClick={(event) => {props.toggleModal(event,"login")}} className={classes.button}>
            Login
          </Button>
          <Button onClick={(event) => {props.toggleModal(event,"signup")}} className={classes.button}>
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);