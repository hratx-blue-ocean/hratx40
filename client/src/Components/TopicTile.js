import React from "react";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

const TopicTile = props => {
  let favoriteTopic = false;
  let favIcon = "";

  props.favorites.forEach(topic => {
    if (topic["topic_name"] === props.topic["topic_name"]) favoriteTopic = true;
  });

  if (favoriteTopic === false) {
    favIcon = (
      <IconButton>
        <svg
          fill="c4adae"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={e =>
            props.handleTopicTileClick(
              e,
              "fav",
              props.topic.topic_id,
              props.topic.topic_name
            )
          }
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
        </svg>
      </IconButton>
    );
  } else {
    favIcon = (
      <IconButton>
        <svg
          fill="#ef9494"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={e =>
            props.handleTopicTileClick(
              e,
              "fav",
              props.topic.topic_id,
              props.topic.topic_name
            )
          }
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </IconButton>
    );
  }

  return (
    <Grid item xs={4}>
      <GridListTile
        key={props.topic["topic_imageurl"]}
        value={props.topic["topic_name"]}
        style={{ cursor: faHandPointer }}
      >
        <div
          xs={4}
          style={{
            backgroundColor: "#d8dbd0",
            height: 130,
            margin: 3,
            paddingLeft: 15,
            paddingRight: 15,
            bottom: "50%",
            fontFamily: "Comfortaa",
            fontSize: 20,
            cursor: faHandPointer
          }}
          id={props.topic["topic_name"]}
          topic_id={props.topic["topic_id"]}
        >
          <div style={{ paddingTop: 5, color: "white" }}>{favIcon}</div>
          <div
            onClick={e =>
              props.handleTopicTileClick(
                e,
                "topicTile",
                props.topic.topic_id,
                props.topic.topic_name
              )
            }
            style={{ textAlign: "center" }}
          >
            {props.topic["topic_name"]}
          </div>
        </div>
      </GridListTile>
    </Grid>
  );
};

export default TopicTile;
