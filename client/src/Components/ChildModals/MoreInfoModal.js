import React from 'react';

const Login = (props) => {
  const { topic, allDBTopics } = props;

  const renderDesc = function () {
    let topics = allDBTopics.slice();

   for (let i = 0; i < topics.length; i++) {
      if (topics[i].topic_name === topic) {
        return <div> {topics[i].topic_description} </div>
      }
    }
  }
  return (
    <div id="child-modal" style={{ justify: "center", marginLeft: "15vw" }}>
      { renderDesc() }
    </div>
  )
}

export default Login;