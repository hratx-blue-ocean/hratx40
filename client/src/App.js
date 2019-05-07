import React, { Component } from "react";
import fetch from "node-fetch";
import axios from "axios";
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      allTopics: [],
      currentPage: "landingPage",
      currentTopic: ""
    };
    this.api = `http://localhost:8000/api/example`;
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get("api/getAllTopics").then(results => {
      const allTopics = results;
      console.log("AT :", allTopics);
      this.setState({ allTopics: allTopics });
    });

    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  handleClick(e) {
    if (e.target.id === "topicTile") {
      this.setState({ currentPage: "topicPage", currentTopic: e.target.name });
    }
  }

  render() {
    if (this.state.currentPage === "landingPage") {
      return (
        <>
          <h1>Welcome to Blue Ocean!</h1>
          <ul>
            {this.state.seaCreatures.map((creature, index) => (
              <li key={index}>{creature}</li>
            ))}
          </ul>
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
