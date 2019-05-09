import React from 'react';
import axios from 'axios';

// const loginReq = (event, toggleOpen, setLogin) => {
//   event.preventDefault();
//   axios.get('http://localhost:8000/api/logins', {params: {
//     password: document.getElementById('password').value,
//     username: document.getElementById('username').value
//   }})
//     .then((response) => {
//       document.getElementById('success').innerHTML = "Success!";
//       setLogin({
//         firstName: response.data[0].first_name,
//         username: response.data[0].username,
//         favorites: response.data[0].favorites
//       });
//       setTimeout(() => {
//         toggleOpen();
//       }, 3000);
//     })
//     .catch((error) => {
//       document.getElementById('error').innerHTML = "Incorrect username/password :(";
//     })
// }

const VolunteerModal = (props) => {
  console.log('Props:', props);
  // const getData = function() {
  //   axios.get('http://localhost:8000/api/volunteers?', {params: {
  //     location
  //   }})
  // }
  return (
    <div id="child-modal" style={{justify: "center", marginLeft:"15vw"}}>
      <h3>Howdy howdy howdy!</h3>
    </div>
  )
}

export default VolunteerModal;