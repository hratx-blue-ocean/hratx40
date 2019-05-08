import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
// import tileData from "./tileData";

// import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import pink from "@material-ui/core/colors/pink";
import FavoriteIcon from "@material-ui/icons/Favorite";

const TopicTiles = props => {
  // const { classes } = props;
  <GridList
    cellHeight={200}
    spacing={1}
    style={{ width: "100%", height: 400, transform: "translateZ(0)" }}
  >
    {/* const tiles = props.allTopics.map(topic => ( */}
    props.allTopics.map(topic => (
    <GridListTile
      key={topic["topic_imageurl"]}
      cols={tile.featured ? 3 : 1}
      rows={tile.featured ? 2 : 1}
    >
      <img src={topic["topic_imageurl"]} alt={topic["topic_name"]} />
      <GridListTileBar
        title={topic["topic_name"]}
        titlePosition="top"
        actionIcon={
          <IconButton onClick={props.handleTopicTileClick}>
            <FavoriteIcon />
          </IconButton>
        }
        actionPosition="left"
        className={"fav"}
      />
    </GridListTile>
    )
  </GridList>;

  //   <Card
  //     id={topic["topic_name"]}
  //     className="topicTile"
  //     square={true}
  //     onClick={e => props.handleTopicTileClick(e, "topicTile")}
  //     src={topic["topic_imageurl"]}
  //     style={{
  //       maxWidth: "33%",
  //       color: { pink },
  //       height: 400,
  //       padding: 2,
  //       cursor: "pointer"
  //     }}
  //   >
  //     <CardMedia
  //       className={topic["topic_name"]}
  //       title={topic["topic_name"]}
  //       image={topic["topic_imageurl"]}
  //       style={{ height: 400, opacity: 0.9 }}
  //     />
  //     <IconButton
  //       onClick={e => props.handleTopicTileClick(e, "fav")}
  //       id={topic["topic_name"]}
  //       className={"fav"}
  //       style={{ height: 400, cursor: "crosshair" }}
  //     >
  //       <FavoriteIcon />
  //     </IconButton>
  //     <CardActions />
  //     <CardContent>
  //       <Typography component="p">{topic["topic_name"]}</Typography>
  //     </CardContent>
  //   </Card>
  // ));
  return <div id="tilesParent">{tiles}</div>;
};

// TopicTiles.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default TopicTiles;
