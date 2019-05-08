import React from 'react';
import axios from 'axios';

const signupReq = (e, toggleOpen) => {
  e.preventDefault();

}

export default Signup = (props) => {
  return (
    <div>
      <br />
      <h1>Signup</h1>
      <br />
      <input id='first-name'></input>
      <br />
      <input id='last-name'></input>
      <br />
      <input id='email'></input>
      <br />
      <input id='username'></input>
      <br />
      <input id='password'></input>
      <br />
      <span id='success'></span>
      <span id='error' style={{ color: 'red' }}></span>
    </div>
  )
}