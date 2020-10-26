import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 450,
  },
  header: {
    display: "flex",
  },
  date: {
    color: "rgba(92,143,62,1)",
  },
  categorie: {
    marginLeft: "3%",
    textTransform: "uppercase",
  },
  button: {
    "&:hover": {
      backgroundImage:
        "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 100%)",
      boxShadow: "none",
    },
  },

  link: {
    textDecoration: "none",
    color: "rgba(92,143,62,1)",
    "&:hover": {
      color: "white",
    },
  },
  title: {
    fontFamily: "Comic Sans MS",
  },
  desc: {
    fontFamily: "Comic Sans MS",
  },
});

const MediaCard = ({
  data: { id, title, picture, categorie, date, shortDescription },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginTop: id !== 0 ? "5%" : "" }}>
      <CardActionArea>
        <CardMedia className={classes.media} image={picture} title={title} />
        <CardContent>
          <div className={classes.header}>
            <Typography
              gutterBottom
              className={classes.date}
              variant="subtitle1"
              component="h2"
            >
              {date}
            </Typography>
            <Typography
              gutterBottom
              className={classes.categorie}
              variant="subtitle1"
              component="h2"
            >
              {categorie}
            </Typography>
          </div>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h4"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            className={classes.desc}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button}>
          <Link to={`/Articles/${title}`} className={classes.link}>
            {" "}
            Lire l'article
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
