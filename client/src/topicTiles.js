import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import pink from "@material-ui/core/colors/pink";
import TopicTile from "./topicTile";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,
    paddingLeft: 5,
    paddingRight: 5
    // width: "90vw"
    // display: "flex"
    // flexWrap: "wrap",
    // justifyContent: "center"
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // width: 500,
    // height: 450
  }
});

const TopicTiles = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <GridList
          // cellHeight={200}
          className={classes.gridList}
          // cols={1}
          // sm={4}
        >
          {props.allTopics.map(topic => (
            <TopicTile
              topic={topic}
              handleTopicTileClick={props.handleTopicTileClick}
              favoritedTopics={props.favoritedTopics}
            />
          ))}
        </GridList>
      </Grid>
    </div>
  );

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
  // return <div id="tilesParent">{tiles}</div>;
};

TopicTiles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicTiles);
