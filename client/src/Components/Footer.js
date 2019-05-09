import React from 'react';
import { faInfoCircle, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
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

const Footer = (props) => {
  return (
    <div style={divStyle}>
      <FontAwesomeIcon name='info' onClick={(event) => {props.toggleModal(event, "info")}} icon={faInfoCircle} size='2x'/>
      <FontAwesomeIcon name='contact' onClick={(event) => {props.toggleModal(event, "contact")}} icon={faEnvelope} size='2x'/>
      <FontAwesomeIcon name='location' onClick={(event) => {props.toggleModal(event, "location")}} icon={faMapMarkerAlt} size='2x'/>
      <FontAwesomeIcon onClick={() => {window.open('https://github.com/hratx-blue-ocean/hratx40',"_blank")}} icon={faGithub} size='2x'/>
    </div>
  );
}

export default Footer;