import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Login from './ChildModals/Login.js'
import VolunteerModal from './ChildModals/VolunteerModal.js'
import DonateModal from './ChildModals/DonateModal.js';
import Signup from './ChildModals/Signup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// Import child modals
const chooseChild = (type, toggleOpen, setLogin, location, topic, allDBTopics) => {
  if (type === "login") {
    return (
      <Login toggleOpen={toggleOpen} setLogin={setLogin} allDBTopics={allDBTopics} />
    );
  } else if (type === "signup") {
    return (
      <Signup toggleOpen={toggleOpen} />
    );
  } else if (type === "donate") {
    return (
      <DonateModal topic={topic} />
    )
  } else if (type === "volunteer") {
    return (
      <VolunteerModal location={location} topic={topic} />
    );
  } else if (type === "charities") {
    return (
      <div id="child-modal">charities</div>
    );
  } else if (type === "info") {
    return (
      <div>
        <br />
        <h3 style={{ textAlign: 'center' }}>HRATX40</h3>
        <ul>
          <li>Austin Anderson</li>
          <li>David Castillo</li>
          <li>Drew DiStefano</li>
          <li>Drew Lockliear</li>
          <li>Jarrod Milller</li>
          <li>Jay Kannaiyan</li>
          <li>Jonathan Becker</li>
          <li>Jonathon Lopez</li>
          <li>Maggie Lopez</li>
          <li>Matthew Feinburg</li>
          <li>Nicholas Miron</li>
          <li>Ryan Ferrer</li>
        </ul>
      </div>
    );
  } else if (type === "location") {
    return (
      <div>
        <br />
        <h2 style={{ textAlign: 'center' }}>Made in</h2>
        <h3 style={{ textAlign: 'center' }}>Austin, Tx</h3>
      </div>
    )
  } else if (type === 'contact') {
    return (
      <div >
        <br />
        <h3 style={{ textAlign: 'center' }}>Contact Information</h3>
        <ul>
          <li>Some relevant shit belongs here</li>
        </ul>
      </div>
    )
  }
}

// const handleClickAway = () => {
//   toggleOpen();
// }

const ModalDiv = (props) => {
  return (
    <Modal open={props.isOpen}>
      <Grid container
        justify="center"
        style={{ marginTop: "20vh", outline: "none" }}>
        <ClickAwayListener onClickAway={() => { props.toggleOpen(); }}>
          <svg onClick={(event) => { props.toggleOpen(event) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </ClickAwayListener>
        style={{ marginTop: "20vh" }}>
        <svg onClick={(event) => { props.toggleOpen(event) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <Grid item xs={6}
          styles={{ justify: "center" }}>
          <Paper
            style={{ height: "400px" }}
            square={true}>
            {chooseChild(props.modalType, props.toggleOpen, props.setLogin, props.location, props.currentTopic, props.allDBTopics)}
          </Paper>
        </Grid>
      </Grid>
    </Modal >
  )
}

export default ModalDiv;