import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import VolunteerModalItem from './VolunteerModalItem';
import './ChildModalStyles/VolunteerModal.css';

class VolunteerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volunteering: [{name: 'Loading..', description: '', time: '', url: ''}]
    }
  }

  componentDidMount() {
    axios.get(`${this.props.serverUrl}/api/volunteers`, {params: {
      location: this.props.location,
      topic_name: this.props.topic
    }})
      .then((response) => {
        if (response.data.length) {
          this.setState({
            volunteering: response.data
          })
        } else {
          this.setState({
            volunteering: [{name: 'No events in the near future', description: 'Please check out the charity pages!', time: '', url: ''}]
          })
        }
      })
      .catch((error) => {
        this.setState({
          volunteering: [{name: 'Error', description: '', time: '', url: ''}]
        })
      })

  }

  render() {
    return (
      <div id="volunteer-modal">
        <Typography variant = 'h3'>
          Volunteering Opportunities in your area
        </Typography>
        <hr/>
        <div id="volunteer-map">
        {this.state.volunteering.map((opportunity, index) => {
          return (
            <VolunteerModalItem opportunity = {opportunity} key = {index} />
          )
        })}
        </div>

      </div>
    )
  }
}
export default VolunteerModal;