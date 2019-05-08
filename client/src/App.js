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
      favoritedTopics: [
        {
          topic_id: 19,
          topic_name: "Humanitarian Relief Supplies",
          topic_imageurl:
            "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/humanitarian_relief.jpg?utm_source=DataAPI&utm_content=9af5afa3",
          website_url:
            "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=7&cuid=30&utm_source=DataAPI&utm_content=9af5afa3"
        },
        {
          topic_id: 20,
          topic_name: "Foreign Charity Support Organizations",
          topic_imageurl:
            "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/single_country.jpg?utm_source=DataAPI&utm_content=9af5afa3",
          website_url:
            "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=7&cuid=31&utm_source=DataAPI&utm_content=9af5afa3"
        }
      ]
    };
    this.api = `http://localhost:8000/api/example`;
    this.handleTopicTileClick = this.handleTopicTileClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/getAllTopics")
      .then(results => {
        let allDBTopics = results.data;
        allDBTopics.sort((a, b) => {
          const temp = this.state.favoritedTopics;
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
      this.state.favoritedTopics.forEach(topic => {
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
              this.setState({ favoritedTopics: allFavorites });
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
            this.setState({ favoritedTopics: allFavorites });
          })
          .catch();
      }
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
