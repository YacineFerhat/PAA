import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link, useRouteMatch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    minWidth: 300,
  },
  card: {
    height: 400,
  },
  media: {
    height: 250,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontFamily: "arial",
    height: 30,
  },
});

const MediaCard = ({ data: { name, picture } }) => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  return (
    <Paper className={classes.root} elevation={3}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} title={name}>
          <img
            className={classes.image}
            src={`${process.env.REACT_APP_PICTURE_URL}/${picture}`}
          />
        </CardMedia>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              className={classes.title}
              align="center"
              gutterBottom
              paragraph
              variant="h4"
              component="h2"
            >
              {name}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default MediaCard;
