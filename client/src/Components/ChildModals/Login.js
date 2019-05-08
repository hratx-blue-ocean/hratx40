import React from 'react';
import axios from 'axios';

const loginReq = (event, toggleOpen, setLogin) => {
  event.preventDefault();
  axios.get('http://localhost:8000/api/logins', {params: {
    password: document.getElementById('password').value,
    username: document.getElementById('username').value
  }})
    .then((response) => {
      document.getElementById('success').innerHTML = "Success!";
      setLogin({
        firstName: response.data[0].first_name,
        username: response.data[0].username,
        favorites: response.data[0].favorites
      });
      setTimeout(() => {
        toggleOpen();
      }, 3000);
    })
    .catch((error) => {
      document.getElementById('error').innerHTML = "Incorrect username/password :(";
    })
}

const Login = (props) => {
  return (
    <div id="child-modal" style={{justify: "center", marginLeft:"15vw"}}>
      <br />
      <h1>Login</h1>
      <br />
      <input placeholder="username/email" id="username" style={{width: "200px"}}></input>
      <br />
      <input type="password" placeholder="password" id="password" style={{width: "200px"}}></input>
      <br />
      <br />
      <button onClick={(event) => {loginReq(event, props.toggleOpen, props.setLogin)}}>Login</button>
      <br />
      <span id="success"></span>
      <span id="error" style={{color: "red"}}></span>
    </div>
  )
}

export default Login;