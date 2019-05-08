import React, { Component } from "react";
import fetch from "node-fetch";
import axios from "axios";
import TopicTiles from "../src/topicTiles";
import TopicTile from "../src/topicTile";
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      allTopics: [],
      currentPage: "landingPage",
      currentTopic: "",
      testingOnly: false
    };
    this.api = `http://localhost:8000/api/example`;
    this.handleTopicTileClick = this.handleTopicTileClick.bind(this);
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

  render() {
    if (this.state.currentPage === "landingPage") {
      return (
        <>
          <h1>Welcome to Blue Ocean!</h1>
          <TopicTiles
            allTopics={this.state.allTopics}
            handleTopicTileClick={this.handleTopicTileClick}
          />
          {/* <ul>
            {this.state.allTopics.map(topic => {
              return <li>{topic["topic_name"]}</li>;
            })}
          </ul>
          <ul>
            {this.state.seaCreatures.map((creature, index) => (
              <li key={index}>{creature}</li>
            ))}
          </ul> */}
        </>
      );
    } else if (this.state.currentPage === "topicPage") {
      return (
        <>
          <h1>Here's the topic page!</h1>
          <ul />
        </>
      );
    }
  }
}
