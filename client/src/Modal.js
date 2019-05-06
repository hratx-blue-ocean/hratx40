import React from 'react';
import Modal from 'material-ui/core/Modal';

const ModalDiv = (props) => {
  if (props.modalType === "login") {
    return (
      <Modal>
        <div>
          {/* Import login modal here */}
          login
        </div>
      </Modal>
    )
  } else if (props.modalType === "signup") {
    return (
      <Modal>
        <div>
          {/* Import signup modal here */}
        </div>
      </Modal>
    )
  } else if (props.modalType === "donate") {
    return (
      <Modal>
        <div>
          {/* Import donate modal here */}
        </div>
      </Modal>
    )
  } else if (props.modalType === "volunteer") {
    return (
      <Modal>
        <div>
          {/* Import volunteer modal here */}
        </div>
      </Modal>
    )
  } else if (props.modalType === "charities") {
    return (
      <Modal>
        <div>
          {/* Import charity modal here */}
        </div>
      </Modal>
    )
  }
}

export default ModalDiv;