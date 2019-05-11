import React, { Component } from 'react';
import axios from 'axios';
import TopicPageContainer from './Components/TopicPageContainer.js';
import LandingPage from './Components/LandingPage.js';
import Modal from './Components/Modal.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTopics: [],
      allTopics: [],
      isOpen: false,
      modalType: 'login',
      page: 'home',
      currentTopic: 'Homeless Services',
      location: '',
      isLoggedIn: false,
      firstName: '',
      user_id: 0,
      favorites: [],
      username: '',
      serverUrl: 'http://18.191.186.111'
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.geolocateSuccess = this.geolocateSuccess.bind(this);
    this.setLoginState = this.setLoginState.bind(this);
    this.handleTopicTileClick = this.handleTopicTileClick.bind(this);
    this.logout = this.logout.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.geolocate();
    this.getAllTopics();
   

    if (window.localStorage.getItem('userId')) {
      this.setState({
        user_id: window.localStorage.getItem('userId'),
        firstName: window.localStorage.getItem('userFName'),
        username: window.localStorage.getItem('username'),
        isLoggedIn: true
      }, () => {
        axios.get(`${this.state.serverUrl}/api/getFavorites?user_id=${this.state.user_id}`)
        .then(data => {
          let tempAllTopics = this.state.allTopics;
          tempAllTopics.sort((a,b) => {
            const temp = data.data;
            for (let i = 0; i < temp.length; i++) {
              if (temp[i].topic_name === a.topic_name) return -1;
            }
            if (a.topic_name < b.topic_name) return -1;
            else return 1;
          });
          this.setState({
            favorites: data.data,
            displayTopics: tempAllTopics,
          })
        })
        .catch(err => {throw err})
      })
    }
  }

  getAllTopics() {
    axios.get(`${this.state.serverUrl}/api/getAllTopics`)
    .then(results => {
      let allDBTopics = results.data;
      allDBTopics.sort((a, b) => {
        const currFavs = this.state.favorites;
        for (let i = 0; i < currFavs.length; i++) {
          if (currFavs[i].topic_name === a.topic_name) return -1;
        }
        if (a.topic_name < b.topic_name) return -1;
        else return 1;
      });
      this.setState({ 
        allTopics: allDBTopics, 
        displayTopics: allDBTopics 
      });
    })
    .catch(err => {throw err})
  }

  handleTopicTileClick(e, target, topic_id, target_name) {
    e.preventDefault();
    if (target === 'fav') {
      let route = `${this.state.serverUrl}/api/addFavorites`;
      for (let favorite of this.state.favorites) {
        if (favorite.topic_name === target_name) {
          route = `${this.state.serverUrl}/api/deleteFavorites`;
          break;
        }
      }
      axios.post(route, {
        topic_id: topic_id,
        user_id: this.state.user_id
      })
      .then(results => {
        const allFavorites = results.data;
        this.setState({
          favorites: allFavorites,
        });
      })
      .catch(err => {throw err});
    } else if (target === 'topicTile') {
      this.setState({
        page: 'action',
        currentTopic: target_name
      });
    }
  }

  logout(e) {
    e.preventDefault();
    this.setState({
      isLoggedIn: false,
      user_id: 0,
      firstName: '',
      username: '',
      favorites: []
    });
    localStorage.clear();
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

  handlePageChange(e, page) {
    e.preventDefault();
    this.setState({
      page: page
    });
  }

  render() {
    if (this.state.page === 'home') {
      return (
        <>
          <LandingPage
            toggleModal={this.toggleModal}
            displayTopics={this.state.displayTopics}
            handleTopicTileClick={this.handleTopicTileClick}
            favorites={this.state.favorites}
            handlePageChange={this.handlePageChange}
            name={this.state.firstName}
            logout={this.logout}
            isLogged={this.state.isLoggedIn}
            firstName={this.state.firstName}
          />
          <Modal
            modalType={this.state.modalType}
            isOpen={this.state.isOpen}
            toggleOpen={this.toggleModal}
            setLogin={this.setLoginState}
            allDBTopics={this.state.allTopics}
            serverUrl={this.state.serverUrl}
          />
        </>
      );
    } else if (this.state.page === 'action') {
      return (
        <>
          <TopicPageContainer
            currentTopic={this.state.currentTopic}
            handlePageChange={this.handlePageChange}
            toggleModal={this.toggleModal}
            logout={this.logout}
            isLogged={this.state.isLoggedIn}
            firstName={this.state.firstName}
          />
          <Modal
            modalType={this.state.modalType}
            isOpen={this.state.isOpen}
            toggleOpen={this.toggleModal}
            setLogin={this.setLoginState}
            location={this.state.location}
            currentTopic={this.state.currentTopic}
            allDBTopics={this.state.allTopics}
            serverUrl={this.state.serverUrl}
          />
        </>
      );
    }
  }
}
