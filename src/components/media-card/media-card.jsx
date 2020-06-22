import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "10%",
  },
  media: {
    height: 220,
  },
});

const MediaCard = ({ data: { link, title, desc, picture } }) => {
  const classes = useStyles();
  let { path } = useRouteMatch();

  return (
    <Card className={classes.root}>
      <Link to={`${path}${link}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title={title}
          />
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              paragraph
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default MediaCard;
