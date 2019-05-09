import React from 'react';
import { faInfoCircle, faEnvelope, faMapMarkerAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const divStyle = {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  listStyle: 'none',
  padding: '20px 0',
  backgroundColor: '#D8DBD0',
  opacity: '.90'
}

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: true,
      info: false,
      contact: false,
      location: false
    }
    
  }

  render() {
    if (this.state.icons === true) {
      return (
        <div style={divStyle}>
          <FontAwesomeIcon name='info' icon={faInfoCircle} size='2x'/>
          <FontAwesomeIcon name='contact' icon={faEnvelope} size='2x'/>
          <FontAwesomeIcon name='home' onClick={() => {this.props.footerPageChange()}} icon={faHome} size='2x'/>
          <FontAwesomeIcon name='location' icon={faMapMarkerAlt} size='2x'/>
          <FontAwesomeIcon onClick={() => {window.open('https://github.com/hratx-blue-ocean/hratx40',"_blank")}} icon={faGithub} size='2x'/>
        </div>
      )
    }
    if (this.state.info === true) {
      return (
        <div>
          <h1>info</h1>
        </div>
      )
    }
    if (this.state.contact === true) {
      return (
        <div>
          <h1>info</h1>
        </div>
      )
    }
    if (this.state.location === true) {
      return (
        <div>
          <h1>info</h1>
        </div>
      )
    }
  } 
}

export default Footer;