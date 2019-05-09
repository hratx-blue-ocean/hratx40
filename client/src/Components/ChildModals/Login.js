import React from 'react';
import axios from 'axios';

// const url = `http://localhost:8000`

const loginReq = (event, toggleOpen, setLogin, allDBTopics, serverUrl) => {
  event.preventDefault();
  axios.get(`${serverUrl}/api/logins`, {
    params: {
      password: document.getElementById('password').value,
      username: document.getElementById('username').value
    }
  })
    .then((response) => {
      document.getElementById('success').innerHTML = "Success!";
      allDBTopics.sort((a, b) => {
        const temp = response.data.favorites;
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].topic_name === a.topic_name) return -1;
        }
        if (a.topic_name < b.topic_name) return -1;
        else return 1;
      });
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
    .catch((error) => {
      document.getElementById('error').innerHTML = "Incorrect username/password :(";
    })
}

const Login = (props) => {
  return (
    <div id="child-modal" style={{ justify: "center", marginLeft: "15vw" }}>
      <br />
      <h1>Login</h1>
      <br />
      <input placeholder="username/email" id="username" style={{ width: "200px" }}></input>
      <br />
      <input type="password" placeholder="password" id="password" style={{ width: "200px" }}></input>
      <br />
      <br />
      <button onClick={(event) => { loginReq(event, props.toggleOpen, props.setLogin, props.allDBTopics, props.serverUrl) }}>Login</button>
      <br />
      <span id="success"></span>
      <span id="error" style={{ color: "red" }}></span>
    </div>
  )
}

export default Login;