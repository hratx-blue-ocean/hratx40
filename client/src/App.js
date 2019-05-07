import React, { Component } from 'react';
import fetch from 'node-fetch';
import LandingPage from './Components/LandingPage.js'
// import './App.css';
import Modal from './Components/Modal.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      isOpen: false,
      modalType: "login"
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
    if(open) {
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

  // This is a global handleChange function
  // make sure whatever is utilizing it has an e.target.name and e.target.value
  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  render() {
    return (
      <>
        <LandingPage topics={[]}/>
        <h1>Welcome to Blue Ocean!</h1>
        <LandingPage topics={[]} />
        <button name="volunteer" onClick={(event) => this.toggleModal(event)}>Press Me!</button>
        <Modal modalType={this.state.modalType} isOpen={this.state.isOpen} toggleOpen={this.toggleModal}/>
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}
        </ul>
      </>
    );
  }
}
