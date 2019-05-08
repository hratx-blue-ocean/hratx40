import React from "react";
// import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=(hunger AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`
      )
      .then(data => {
        // console.log(data.data.articles);
        this.setState({
          articles: data.data.articles
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    return (
      <div className="App">
      { this.state.articles.map((article)=>{ 
        return (
          <a href={`${article.url}`} target="_blank" style={{color:"black", textDecoration:"none"}}>
            <Card style={{display:"flex", flexDirection:"row", alignItems:"center", justify:"center", width:"100%"}}>
                <CardContent style={{width:"50%"}}>
                  <h2>{article.title}</h2>
                </CardContent>
                <CardMedia
                  style={{width:"50%"}}
                  component="img"
                  image={article.urlToImage}
                />
            </Card>  
          </a>
        )
      })}
      </div>
    )
  }
}



export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);