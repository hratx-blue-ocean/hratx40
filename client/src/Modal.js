import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Import child modals
const ModalDiv = (props) => {
  if (props.modalType === "login") {
    return (
      <Modal open={props.isOpen}>
        <Grid container
              justify="center"
              style={{marginTop: "20vh"}}>
          <svg onClick={(event) => {props.toggleOpen(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <Grid item xs={9}
                styles={{justify: "center"}}>
            <Paper 
              className="parent-modal"
              style={{height:"400px"}}
              square={true}>
              {/* Import login modal here */}
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    )
  } else if (props.modalType === "signup") {
    return (
      <Modal open={props.isOpen}>
        <Grid container
              justify="center"
              style={{marginTop: "20vh"}}>
          <svg onClick={(event) => {props.toggleOpen(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <Grid item xs={9}
                styles={{justify: "center"}}>
            <Paper 
              className="parent-modal"
              style={{height:"400px"}}
              square={true}>
              {/* Import signup modal here */}
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    )
  } else if (props.modalType === "donate") {
    return (
      <Modal open={props.isOpen}>
        <Grid container
              justify="center"
              style={{marginTop: "20vh"}}>
          <svg onClick={(event) => {props.toggleOpen(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <Grid item xs={9}
                styles={{justify: "center"}}>
            <Paper 
              className="parent-modal"
              style={{height:"400px"}}
              square={true}>
              {/* Import donate modal here */}
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    )
  } else if (props.modalType === "volunteer") {
    return (
      <Modal open={props.isOpen}>
        <Grid container
              justify="center"
              style={{marginTop: "20vh"}}>
          <svg onClick={(event) => {props.toggleOpen(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <Grid item xs={9}
                styles={{justify: "center"}}>
            <Paper 
              className="parent-modal"
              style={{height:"400px"}}
              square={true}>
              {/* Import volunteer modal here */}
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    )
  } else if (props.modalType === "charities") {
    return (
      <Modal open={props.isOpen}>
        <Grid container
              justify="center"
              style={{marginTop: "20vh"}}>
          <svg onClick={(event) => {props.toggleOpen(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <Grid item xs={9}
                styles={{justify: "center"}}>
            <Paper 
              className="parent-modal"
              style={{height:"400px"}}
              square={true}>
              {/* Import charities modal here */}
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    )
  }
}

export default ModalDiv;