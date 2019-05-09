import React from 'react';
import axios from 'axios';

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
        }, 3000);
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
    <div id='child-modal' style={{ justify: 'center', marginLeft: '15vw' }}>
      <br />
      <h1>Signup</h1>
      <br />
      <input id='first-name' placeholder='Enter your first name' style={{ width: "200px" }}></input>
      <br />
      <input id='last-name' placeholder='Enter your last name' style={{ width: "200px" }}></input>
      <br />
      <input id='email' placeholder='Enter your email address' style={{ width: "200px" }}></input>
      <br />
      <input id='username' placeholder='Enter a username' style={{ width: "200px" }}></input>
      <br />
      <input id='password' type='password' placeholder='Enter password' style={{ width: "200px" }}></input>
      <br />
      <input id='password-check' type='password' placeholder='Enter password again' style={{ width: "200px" }}></input>
      <br />
      <button onClick={(e) => { signupReq(e, props.toggleOpen, props.serverUrl) }}>Signup!</button>
      <span id='success'></span>
      <span id='error' style={{ color: 'red' }}></span>
    </div>
  )
}

export default Signup;