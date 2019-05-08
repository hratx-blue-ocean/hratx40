import React from "react";
import axios from "axios";
import NewsFeedItem from "./NewsfeedItem.js"

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/news?topic=${this.props.currentTopic}`)
      .then((res) => {
        // console.log("newsfeed client: ", res.data)
        this.setState({
          articles: res.data
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div style={{height:"100vh"}}>
      { this.state.articles.map((article)=>( 
        <NewsFeedItem article={article} />
      ))}
      </div>
    )
  }
}

export default Newsfeed;