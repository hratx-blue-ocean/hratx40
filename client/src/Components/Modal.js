import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Login from './ChildModals/Login.js'

// Import child modals
const chooseChild = (type, toggleOpen) => {
  if (type === "login") {
    return (
      <Login toggleOpen={toggleOpen}/>
    );
  } else if (type === "signup") {
    return (
      <div id="child-modal">signup</div>
    );
  } else if (type === "donate") {
    return (
      <div id="child-modal">donate</div>
    )
  } else if (type === "volunteer") {
    return (
      <div id="child-modal">volunteer</div>
    );
  } else if (type === "charities") {
    return (
      <div id="child-modal">charities</div>
    );
  } else if (type === "info") {
    return (
      <div id="child-modal">info</div>
    );
  }
}

const ModalDiv = (props) => {
  return (
    <Modal open={props.isOpen}>
      <Grid container
            justify="center"
            style={{marginTop: "20vh"}}>
        <svg onClick={(event) => {props.toggleOpen(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <Grid item xs={6}
              styles={{justify: "center"}}>
          <Paper 
            style={{height:"400px"}}
            square={true}>
            {chooseChild(props.modalType, props.toggleOpen)}
          </Paper>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalDiv;