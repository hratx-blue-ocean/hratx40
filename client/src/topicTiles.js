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
  const tiles = props.allTopics.map(topic => (
    <Card
      className={topic["topic_name"]}
      square={true}
      onClick={props.handleClick}
    >
      <CardHeader
        action={
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography component="p">{topic["topic_name"]}</Typography>
      </CardContent>
    </Card>
  ));
  return <div>{tiles}</div>;
};

// TopicTile.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default TopicTiles;
