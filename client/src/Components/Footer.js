import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Mail from '@material-ui/icons/Mail';
import Home from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
};

class LabelBottomNavigation extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
    
    };
  }


  handleHome() {

  }

  handleGithub() {

  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Mail" value="mail" icon={<Mail />} />
        <BottomNavigationAction label="Home" value="favorites" icon={<Home />} />
        <BottomNavigationAction label="Location" value="location" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);