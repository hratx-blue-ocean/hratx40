import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import Home from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
  },
};

class LabelBottomNavigation extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      value: 'recents',
    };
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Home" value="favorites" icon={<Home />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);