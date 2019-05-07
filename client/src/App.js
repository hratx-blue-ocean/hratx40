import React, { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';
import Modal from './Modal.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      isOpen: false,
      modalType: ""
    };
    this.api = `http://localhost:8000/api/example`;
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  // Toggles if the Modal is open or closed
  // upon open, sets the modalType using the element's name
  toggleModal (event) {
    event.preventDefault();
    let open = !this.state.isOpen;
    if(this.open) {
      let name = event.target.name;
      this.setState({ 
        isOpen: open, 
        modalType: name
      });
    } else {
      this.setState({ 
        isOpen: open 
      });
    }
  }

  render() {
    return (
      <>
        <h1>Welcome to Blue Ocean!</h1>
        <Modal modalType={"login"} isOpen={this.state.isOpen} toggleOpen={this.toggleModal}/>
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}
        </ul>
      </>
    );
  }
}
