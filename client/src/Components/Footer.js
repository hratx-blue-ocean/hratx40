import React from 'react';
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

const LabelBottomNavigation = (props) => {

  

  return (
    <BottomNavigation>
      <BottomNavigationAction label="Mail" value="mail" icon={<Mail />} />
      <BottomNavigationAction label="Home" value="favorites" icon={<Home />} />
      <BottomNavigationAction name="location" label="Location" value="location" icon={<LocationOnIcon />} onClick={(event) => props.toggleModal(event)} />
      <a href="https://github.com/hratx-blue-ocean/hratx40" target="_blank">github</a>
    </BottomNavigation>
  );
}

// LabelBottomNavigation.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(LabelBottomNavigation);