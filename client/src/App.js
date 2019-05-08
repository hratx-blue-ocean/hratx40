import React, { Component } from "react";
import fetch from "node-fetch";
import SearchAppBar from "./Components/Header.js";
import LandingPage from "./Components/LandingPage.js";
// import './App.css';
import Modal from "./Components/Modal.js";
import axios from "axios";
import TopicPageContainer from "./Components/TopicPageContainer.js";
import TopicTiles from "./topicTiles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTopics: [],
      isOpen: false,
      modalType: "login",
      page: "home",
      currentTopic: "homeless services",
      location: "",
      isLoggedIn: false,
      firstName: "",
      favorites: [],
      username: ""
    };
    // this.api = `http://localhost:8000/api/example`;
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.geolocateSuccess = this.geolocateSuccess.bind(this);
    this.setLoginState = this.setLoginState.bind(this);
    this.handleTopicTileClick = this.handleTopicTileClick.bind(this);
  }
  componentDidMount() {
    this.geolocate();
    axios
      .get("http://localhost:8000/api/getAllTopics")
      .then(results => {
        let allDBTopics = results.data;
        allDBTopics.sort((a, b) => {
          const temp = this.state.favorites;
          for (let i = 0; i < temp.length; i++) {
            if (temp[i].topic_name === a.topic_name) return -1;
          }
          if (a.topic_name < b.topic_name) return -1;
          else return 1;
        });
        this.setState({ allTopics: allDBTopics });
      })
      .catch();
  }

  handleTopicTileClick(e, target, topic_id, target_name) {
    if (target === "topicTile") {
      this.setState({
        currentPage: "topicPage",
        currentTopic: target_name
      });
    } else if (target === "fav") {
      let foundFavorite = false;
      this.state.favorites.forEach(topic => {
        if (topic.topic_name === target_name) {
          foundFavorite = true;
          axios
            .post("http://localhost:8000/api/deleteFavorites", {
              topic_id: topic_id,
              //user_id is hardcoded, change when login is implemented
              user_id: 1
            })
            .then(results => {
              const allFavorites = results.data;
              this.setState({ favorites: allFavorites });
            })
            .catch();
        }
      });
      if (foundFavorite === false) {
        axios
          .post("http://localhost:8000/api/addFavorites", {
            topic_id: topic_id,
            //user_id is hardcoded, change when login is implemented
            user_id: 1
          })
          .then(results => {
            const allFavorites = results.data;
            this.setState({ favorites: allFavorites });
          })
          .catch();
      }
    }
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
    this.setState({
      location: `${latitude},${longitude}`
    });
  }

  // Toggles if the Modal is open or closed
  // upon open, sets the modalType using the element's name
  toggleModal(event, type) {
    if (event) event.preventDefault();
    let open = !this.state.isOpen;
    if (open) {
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

  setLoginState(data) {
    this.setState(data);
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
          <SearchAppBar toggleModal={this.toggleModal} />
          <LandingPage topics={[]} toggleModal={this.toggleModal} />
          <TopicTiles
            allTopics={this.state.allTopics}
            handleTopicTileClick={this.handleTopicTileClick}
            favoritedTopics={this.state.favorites}
          />
          <Modal
            modalType={this.state.modalType}
            isOpen={this.state.isOpen}
            toggleOpen={this.toggleModal}
            setLogin={this.setLoginState}
          />
          <button name="action" onClick={e => this.handlePageChange(e)}>
            Go To Action Page
          </button>
        </>
      );
    } else if (this.state.page === "action") {
      return (
        <>
          <TopicPageContainer currentTopic={this.state.currentTopic} />
          <Modal
            modalType={this.state.modalType}
            isOpen={this.state.isOpen}
            toggleOpen={this.toggleModal}
            setLogin={this.setLoginState}
          />
          <button name="home" onClick={e => this.handlePageChange(e)}>
            Go To Home Page
          </button>
        </>
      );
    }
  }
}
