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
  }
  componentDidMount() {
    // fetch(this.api)
    //   .then(res => res.json())
    //   .then(seaCreatures => {
    //     this.setState({ seaCreatures: seaCreatures.data });
    //   });
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
          <SearchAppBar />
          <LandingPage topics={[]}/>
          <button name="volunteer" onClick={(event) => this.toggleModal(event)}>Press Me!</button>
          <Modal modalType={this.state.modalType} isOpen={this.state.isOpen} toggleOpen={this.toggleModal}/>
          <button name="action" onClick={(e) => this.handlePageChange(e)}>Go To Action Page</button>
        </>
      );
    } else if (this.state.page === 'action') {
      return (
        <>
          <TopicPageContainer />
          <button name="home" onClick={(e) => this.handlePageChange(e)}>Go To Home Page</button>
        </>
      )
    }
  }
}
