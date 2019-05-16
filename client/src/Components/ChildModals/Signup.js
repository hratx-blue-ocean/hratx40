import React from 'react';
import axios from 'axios';
import './ChildModalStyles/SignUp.css';

const signupReq = (e, toggleOpen, serverUrl) => {
  e.preventDefault();
  if (document.getElementById('password').value === document.getElementById('password-check').value) {
    axios.post(`${serverUrl}/api/signups`, {
      first_name: document.getElementById(`first-name`).value,
      last_name: document.getElementById(`last-name`).value,
      email: document.getElementById(`email`).value,
      username: document.getElementById(`username`).value,
      password: document.getElementById(`password`).value,
    })
      .then((res) => {
        document.getElementById(`success`).innerHTML = `Success!`;
        setTimeout(() => {
          toggleOpen();
        }, 1000);
      })
      .catch((err) => {
        document.getElementById(`error`).innerHTML = `Invalid signup credentials`;
      })
  } else {
    document.getElementById(`error`).innerHTML = `Passwords don't match`;
  }
}
const Signup = (props) => {
  return (
    <div id='signup-modal'>
      <h1>Signup</h1>
      
      <input id='first-name' placeholder='Enter your first name'></input>
      <input id='last-name' placeholder='Enter your last name'></input>
      <input id='email' placeholder='Enter your email address'></input>
      <input id='username' placeholder='Enter a username'></input>
      <input id='password' type='password' placeholder='Enter password'></input>
      <input id='password-check' type='password' placeholder='Enter password again'></input>

      <div id="signup-modal-button-container">
        <button id="signup-button" onClick={(e) => { signupReq(e, props.toggleOpen, props.serverUrl) }}>Signup!</button>
        <span id="sneaky-login-span">Already got an account? Login </span>
        <span id="sneaky-login" onClick={(e) => props.switchModal(e, 'login')}>here!</span>
      </div>

      <span id='success'></span>
      <span id='error'></span>
    </div>
  )
}

export default Signup;