import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const ModalDiv = (props) => {
  if (props.modalType === "login") {
    return (
      <Modal open={props.isOpen}>
        <div>
          {/* Import login modal here */}
          <Grid>
            <Paper>
              Login
            </Paper>
          </Grid>
        </div>
      </Modal>
    )
  } else if (props.modalType === "signup") {
    return (
      <Modal open={props.isOpen}>
        <div>
          {/* Import signup modal here */}
        </div>
      </Modal>
    )
  } else if (props.modalType === "donate") {
    return (
      <Modal open={props.isOpen}>
        <div>
          {/* Import donate modal here */}
        </div>
      </Modal>
    )
  } else if (props.modalType === "volunteer") {
    return (
      <Modal open={props.isOpen}>
        <div>
          {/* Import volunteer modal here */}
        </div>
      </Modal>
    )
  } else if (props.modalType === "charities") {
    return (
      <Modal open={props.isOpen}>
        <div>
          {/* Import charity modal here */}
        </div>
      </Modal>
    )
  }
}

export default ModalDiv;