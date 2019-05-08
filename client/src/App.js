import React, { Component } from "react";
import fetch from "node-fetch";
import LandingPage from "./Components/LandingPage.js";
import axios from "axios";
import TopicTiles from "../src/topicTiles";
import TopicTile from "../src/topicTile";
// import './App.css';
import Modal from "./Components/Modal.js";
import ActionsContainer from "./Components/ActionsContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      allTopics: [],
      page: "landingPage",
      currentTopic: "",
      testingOnly: false,
      isOpen: false,
      modalType: "login"
    };
    this.api = `http://localhost:8000/api/example`;
    this.handleTopicTileClick = this.handleTopicTileClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/getAllTopics")
      .then(results => {
        const allDBTopics = results.data;
        // console.log("AT :");
        this.setState({ allTopics: allDBTopics });
      })
      .catch(error => {
        // console.log(error);
      });

    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  handleTopicTileClick(e, target) {
    console.log("click happened", e.target.className);
    if (target === "topicTile") {
      console.log("clicked");
      alert("topicTile");
      this.setState({
        currentPage: "topicPage",
        currentTopic: e.target.className,
        testingOnly: e.target.id
      });
    } else if (target === "fav") {
      this.setState({ testingOnly: e.target.id });
      alert("fav");
      //if user is loggedin submit fav to database, otherwise prompt user to sign up
    }
  }

  // Toggles if the Modal is open or closed
  // upon open, sets the modalType using the element's name
  toggleModal(event) {
    event.preventDefault();
    let open = !this.state.isOpen;
    if (open) {
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
        <LandingPage topics={[]} />
        <h1>Welcome to Blue Ocean!</h1>
        <TopicTiles
          allTopics={this.state.allTopics}
          handleTopicTileClick={this.handleTopicTileClick}
        />
        <button name="volunteer" onClick={event => this.toggleModal(event)}>
          Press Me!
        </button>
        <Modal
          modalType={this.state.modalType}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleModal}
        />
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}
        </ul>
      </>
    );
  }
}
