import React from "react";
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" },
        { urlToImage: "" }
      ]
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q="hunger"&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`
      )
      .then(data => {
        console.log(data.data.articles);
        this.setState({
          articles: data.data.articles
        });
      })
      .catch(err => {
        console.error(`ERROR: ${err}`);
      });
  }

  render() {
    return (
      <div className="App">
      { this.state.articles.map((article)=>{ 
        <Card>
          <CardHeader>
            <h1>{article.title}</h1>
          </CardHeader>
          <CardContent>
            <h2>{article.title}</h2>
          </CardContent>
        </Card>  
      })}
      </div>
    )
  }
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);