import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import pink from "@material-ui/core/colors/pink";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TopicTile from "../src/topicTile";

// const styles = theme => ({
//   card: {
//     maxWidth: "100%"
//   },
//   avatar: {
//     backGroundColor: pink
//   }
// });

// const topicTiles = props.topicTiles.map(tile => {});

const TopicTiles = props => {
  const { classes } = props;
  const tiles = props.allTopics.map(topic => (
    <Card
      id={topic["topic_name"]}
      className="topicTile"
      square={true}
      onClick={e => props.handleTopicTileClick(e, "topicTile")}
      src={topic["topic_imageurl"]}
      style={{ maxWidth: "33%", color: { pink }, height: 400 }}
    >
      {/* <CardMedia
        className={topic["topic_name"]}
        title={topic["topic_name"]}
        image={topic["topic_imageurl"]}
      /> */}
      <CardActions>
        <IconButton
          onClick={e => props.handleTopicTileClick(e, "fav")}
          id={topic["topic_name"]}
          className={"fav"}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography component="p">{topic["topic_name"]}}</Typography>
      </CardContent>
    </Card>
  ));
  return <div id="tilesParent">{tiles}</div>;
};

TopicTiles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TopicTiles;
