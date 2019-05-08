import React, { Component } from "react";
import fetch from "node-fetch";
import LandingPage from "./Components/LandingPage.js";
import axios from "axios";
import TopicTiles from "./topicTiles";
// import './App.css';
import Modal from "./Components/Modal.js";
import TopicPageContainer from "./Components/TopicPageContainer.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      allTopics: [],
      currentTopic: "",
      testingOnly: false,
      isOpen: false,
      modalType: "login",
      page: "home",
      favoritedTopics: []
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
        console.log("no topics to load");
      });
  }

  handleTopicTileClick(e, target) {
    console.log("click happened", e.target.className);
    if (target === "topicTile") {
      console.log("eTV", e.target.id);
      this.setState({
        currentPage: "topicPage",
        currentTopic: e.target.id
      });
    } else if (target === "fav") {
      let foundFavorite = false;
      this.state.favoritedTopics.forEach(topic => {
        if (topic.topic_name === e.target.id) {
          foundFavorite = true;
          //unfill heart on topicTile
          // api/deleteFavorites route
          // topic_id, user_id
          //this.setState favoritedTopics
        }
      });
      if (foundFavorite === false) {
        //fill heart on topicTile
        // api/addFavorites route
        // topic_id, user_id
        //this.setState favoritedTopics
      }
      if (this.state.favoritedTopics[""].includes(e.target.id)) {
      } else {
      }
      axios
        .get("http://localhost:8000/api/logins")
        .then(results => {
          console.log("favs:", results);
          const allFavorites = results.data;
          this.setState({ favoritedTopics: allFavorites });
        })
        .catch(error => {
          console.log("no favorites to load");
        });
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

  // Temporary change page state button (Jay)
  handlePageChange(e) {
    e.preventDefault();
    // console.log('page:', e.target.name)
    this.setState({
      page: e.target.name
    });
  }

  // When action tiles and navbar are active, remove handlePageChange fn and buttons (Jay)
  render() {
    if (this.state.page === "home") {
      return (
        <>
          <LandingPage topics={[]} />
          <TopicTiles
            allTopics={this.state.allTopics}
            handleTopicTileClick={this.handleTopicTileClick}
            favoritedTopics={this.state.favoritedTopics}
          />
          <button name="volunteer" onClick={event => this.toggleModal(event)}>
            Press Me!
          </button>
          <Modal
            modalType={this.state.modalType}
            isOpen={this.state.isOpen}
            toggleOpen={this.toggleModal}
          />
          <button name="action" onClick={e => this.handlePageChange(e)}>
            Go To Action Page
          </button>
        </>
      );
    } else if (this.state.page === "action") {
      return (
        <>
          <TopicPageContainer />
          <button name="home" onClick={e => this.handlePageChange(e)}>
            Go To Home Page
          </button>
        </>
      );
    }
  }
}
