import React from "react";
import NewsFeedItem from "./NewsfeedItem.js"
import axios from 'axios';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  // Uncomment the code below to use NEWS API
  componentDidMount() {
    let topic = this.props.currentTopic;
    axios.get(`http://ripl.today/api/newsfeed?topic=${topic}`)
      .then((res) => {
        this.setState({
          articles: res.data[0].articles
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div onLoad={window.scrollTo(0,0)}>
        <h2 style={{textAlign:"center", borderBottom:"solid", borderColor:"#C4ADAE"}}>Newsfeed</h2>
        <div style={{overflowY:"scroll", width: "100%", height:"100vh", paddingRight: "1vw"}}>
          { this.state.articles.map((article, index)=>( 
            <NewsFeedItem article={article} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default Newsfeed;