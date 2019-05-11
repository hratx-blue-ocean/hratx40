import React from 'react';
import Paper from '@material-ui/core/Paper';
import { faInfoCircle, faEnvelope, faMapMarkerAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const divStyle = {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  listStyle: 'none',
  height: '64px',
  backgroundColor: '#C4ADAE',
  opacity: '.90'
}

const paperStyle = {
  textAlign: 'center'
}

const textStyle = {
  padding: '20px 10vw',
  lineHeight: '1.6'
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
    
    this.handleContact = this.handleContact.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  checkInfo() {
    if (this.state.info) {
      return (
        <Paper>
          <div>
            <br />
            <h2 style={paperStyle}>About Ripl.Today</h2>
            <p style={textStyle}>Ripl.Today is a service for users who want to contribute to helping make the world a better place. There are a lot of issues that need solving right now, ranging from homelessness, food waste, climate change, biodiversity loss, and the list goes on. It can seem overwhelming and lead to apathy. Ripl.Today wants to change that and show that everyone can help in getting humanity to a sustainable future. If you have time but no money, volunteer! If you have money, but no time, donate! Do what you can. Throw your pebble and make a ripple today. Click on one of the tiles above to get started.</p>
            <p style={textStyle}>Get in touch with the Ripl.Today team by emailing us at contact@ripl.today</p>
            <br />
          </div>
        </Paper>
      )
    }
  }

  checkContact() {
    if (this.state.contact) {
      return (
        <Paper>
          <div>
            <br />
            <h2 style={paperStyle}>Contact</h2>
            <p style={paperStyle}>contact@ripl.today</p>
            <br />
          </div>
        </Paper>
      )
    }
  }

  checkLocation() {
    if (this.state.location) {
      return (
        <Paper>
          <div>
            <br />
            <h2 style={paperStyle}>Location</h2>
            <h4 style={paperStyle}>Austin, TX</h4>
            <br />
          </div>
        </Paper>
      )
    }
  }

  handleInfo() {
    if (this.state.info === true) {
      this.setState({
        info: false,
        contact: false,
        location: false
      })
    } else {
      this.setState({
        info: true,
        contact: false,
        location: false
      }, () => window.scrollTo(0,document.body.scrollHeight))
    }
  }

  handleContact() {
    if (this.state.contact === true) {
      this.setState({
        contact: false,
        location: false,
        info: false
      })
    } else {
      this.setState({
        contact: true,
        location: false,
        info: false
      }, () => window.scrollTo(0,document.body.scrollHeight))
    }
  }

  handleLocation() {
    if (this.state.location === true) {
      this.setState({
        contact: false,
        info: false,
        location: false
      })
    } else {
      this.setState({
        contact: false,
        info: false,
        location: true,
      }, () => window.scrollTo(0,document.body.scrollHeight))
    }
  }

  render() {
    if (this.state.icons === true) {
      return (
        <div>
          <div style={divStyle}>
            <FontAwesomeIcon name='info' icon={faInfoCircle} size='2x' onClick={() => {this.handleInfo()}}/>
            <FontAwesomeIcon name='contact' icon={faEnvelope} size='2x' onClick={() => {this.handleContact()}}/>
            <FontAwesomeIcon name='home' onClick={(e) => this.props.handlePageChange(e, 'home')} icon={faHome} size='2x'/>
            <FontAwesomeIcon name='location' icon={faMapMarkerAlt} size='2x' onClick={() => {this.handleLocation()}}/>
            <FontAwesomeIcon onClick={() => {window.open('https://github.com/hratx-blue-ocean/hratx40',"_blank")}} icon={faGithub} size='2x'/>
          </div>
          {this.checkInfo()}
          {this.checkContact()}
          {this.checkLocation()}
        </div>
      )
    }
  } 
}
export default Footer;