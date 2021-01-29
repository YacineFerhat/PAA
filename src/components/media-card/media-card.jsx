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
    fontSize: "24px",
    color: "#1d7b63",
  },
  desc: {
    fontFamily: "arial",
    fontSize: "16px",
  },
});

const MediaCard = ({ data: { link, title, desc, picture, icon } }) => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  return (
    <Paper className={classes.root} elevation={3}>
      <Card className={classes.card}>
        <Link to={`${path}${link}`}>
          <CardActionArea>
            <CardMedia className={classes.media} title={title}>
              <img className={classes.image} src={picture} />
            </CardMedia>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {icon && (
                  <figure class="image is-32x32">
                    <img src={icon} />
                  </figure>
                )}
                <Typography
                  className={classes.title}
                  align="center"
                  gutterBottom
                  paragraph
                  variant="h5"
                  component="h2"
                >
                  {title}
                </Typography>
              </div>
              <Typography
                className={classes.desc}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Paper>
  );
};

export default MediaCard;
