import React from 'react';

const Login = (props) => {
  const { topic, allDBTopics } = props;
  const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '50vh'
  }
  const renderDesc = function () {
    let topics = allDBTopics.slice();

   for (let i = 0; i < topics.length; i++) {
      if (topics[i].topic_name === topic) {
        return (
          <div style={style}>
            <div>
              <div>
                <h3>{topic}</h3>
                <br />
              </div>
              {topics[i].topic_description}
            </div>
          </div>
        )
      }
    }
  }
  return (
    <div id="child-modal" style={{ margin: "5vw", display: 'flex' }}>
      { renderDesc() }
    </div>
  )
}

export default Login;