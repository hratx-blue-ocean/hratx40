import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

const NewsFeedItem = (props) => (
  <a href={`${props.article.url}`} rel="noopener noreferrer" target="_blank" style={{color:"black", textDecoration:"none", margin:"5px"}}>
    <Card style={{display:"flex", flexDirection:"row", alignItems:"center", justify:"center", width:"100%"}}>
        <CardContent style={{width:"50%"}}>
          <h2>{props.article.title}</h2>
          <br/>
          <p>{props.article.source.name}</p>
        </CardContent>
        <CardMedia
          style={{width:"50%"}}
          component="img"
          image={props.article.urlToImage}
        />
    </Card>  
  </a>
)

export default NewsFeedItem;