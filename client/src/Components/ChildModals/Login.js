import React from "react";
import axios from "axios";
import "./ChildModalStyles/Login.css";

// const url = `http://localhost:8000`

const loginReq = (event, toggleOpen, setLogin, allDBTopics, serverUrl) => {
  event.preventDefault();
  axios
    .get(`${serverUrl}/api/logins`, {
      params: {
        password: document.getElementById("password").value,
        username: document.getElementById("username").value
      }
    })
    .then(response => {
      document.getElementById("success").innerHTML = "Success!";
      let newAll = [];
      let currFavs = response.data.favorites;
      allDBTopics.sort((a, b) => {
        if (b.topic_name < a.topic_name) return -1;
      });
      currFavs.sort((a, b) => {
        if (b.topic_name < a.topic_name) return -1;
      });
      allDBTopics.forEach(value => {
        let counter = false;
        for (let i = 0; i < currFavs.length; i++) {
          if (currFavs[i].topic_name === value.topic_name) {
            counter = true;
          }
        }
        if (counter === false) {
          newAll.push(value);
        }
      });

      let all = currFavs.concat(newAll);
      window.localStorage.setItem("userId", response.data.user_id);
      window.localStorage.setItem("userFName", response.data.first_name);
      window.localStorage.setItem("username", response.data.username);
      window.localStorage.setItem(
        "userFave",
        JSON.stringify(response.data.favorites)
      );
      setLogin({
        isLoggedIn: true,
        user_id: response.data.user_id,
        firstName: response.data.first_name,
        username: response.data.username,
        favorites: response.data.favorites
      });
      setTimeout(() => {
        toggleOpen();
      }, 1000);
    })
    .catch(error => {
      document.getElementById("error").innerHTML =
        "Incorrect username/password";
    });
};

const Login = props => {
  return (
    <div id="login-modal">
      <h1>Login</h1>

      <input placeholder="username/email" id="username" />
      <input type="password" placeholder="password" id="password" />

      <div id="login-modal-button-container">
        <button
          id="login-button"
          onClick={event => {
            loginReq(
              event,
              props.toggleOpen,
              props.setLogin,
              props.allDBTopics,
              props.serverUrl
            );
          }}
        >
          Login
        </button>
        <span id="sneaky-login-span">Don't have an account? Sign up </span>
        <span id="sneaky-signup">here!</span>
      </div>

      <span id="success" />
      <span id="error" />
    </div>
  );
};

export default Login;
