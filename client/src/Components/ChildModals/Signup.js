import React from 'react';
import axios from 'axios';
import PasswordMask from 'react-password-mask';

const signupReq = (e, toggleOpen) => {
  e.preventDefault();
  axios.get(`http://localhost:8000/api/signups`, {
    params: {
      firstName: document.getElementById(`first-name`).value,
      lastName: document.getElementById(`last-name`).value,
      email: document.getElementById(`email`).value,
      username: document.getElementById(`username`).value,
      password: document.getElementById(`password`).value,
    }
  })
    .then((results) => {
      document.getElementById(`success`).innerHTML = `Success!`;
      setTimeout(() => {
        toggleOpen();
      }, 3000);
    })
    .catch((err) => {
      document.getElementById(`error`).innerHTML = `Invalid signup credentials`;
    })
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
      <PasswordMask id='password' name='password' placeholder='Enter password' useVendorStyles={false} inputStyles={{ width: "200px" }} />
      <br />
      <button onClick={(e) => { signupReq(e, props.toggleOpen) }}>Signup!</button>
      <span id='success'></span>
      <span id='error' style={{ color: 'red' }}></span>
    </div>
  )
}

export default Signup;