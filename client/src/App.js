import React, { Component } from 'react';
import fetch from 'node-fetch';
import SearchAppBar from './Components/Header.js';
import LandingPage from './Components/LandingPage.js'
// import './App.css';
import Modal from './Components/Modal.js';
import TopicPageContainer from './Components/TopicPageContainer.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      isOpen: false,
      modalType: "login",
      page: 'home'
    };
    // this.api = `http://localhost:8000/api/example`;
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // fetch(this.api)
    //   .then(res => res.json())
    //   .then(seaCreatures => {
    //     this.setState({ seaCreatures: seaCreatures.data });
    //   });
  }

  geolocate() {
    if (window.navigator && window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.geolocateSuccess,
        this.onGeolocateError
      );
    }
  }

  geolocateSuccess(coordinates) {
    const { latitude, longitude } = coordinates.coords;
    alert(
      "Found coordinates: ",
      latitude.toFixed(1),
      longitude.toFixed(1)
    );
    this.setState({
      location: `${latitude.toFixed(1)},${longitude.toFixed(1)}`
    });
  }


  // Toggles if the Modal is open or closed
  // upon open, sets the modalType using the element's name
  toggleModal (event, type) {
    if (event) event.preventDefault();
    let open = !this.state.isOpen;
    if(open) {
      this.setState({ 
        isOpen: open, 
        modalType: type
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

  // Temporary change page state button (Jay)
  handlePageChange(e) {
    e.preventDefault();
    // console.log('page:', e.target.name)
    this.setState({
      page: e.target.name
    })

  }

  // When action tiles and navbar are active, remove handlePageChange fn and buttons (Jay)
  render() {
    if (this.state.page === 'home') {
      return (
        <>
          <SearchAppBar toggleModal={this.toggleModal} />
          <LandingPage topics={[]} toggleModal={this.toggleModal}/>
          <button name="volunteer" onClick={(event) => this.toggleModal(event, "login")}>Press Me!</button>
          <Modal modalType={this.state.modalType} isOpen={this.state.isOpen} toggleOpen={this.toggleModal}/>
          <button name="action" onClick={(e) => this.handlePageChange(e)}>Go To Action Page</button>
        </>
      );
    } else if (this.state.page === 'action') {
      return (
        <>
          <TopicPageContainer />
          <Modal modalType={this.state.modalType} isOpen={this.state.isOpen} toggleOpen={this.toggleModal}/>
          <button name="home" onClick={(e) => this.handlePageChange(e)}>Go To Home Page</button>
        </>
      )
    }
  }
}
