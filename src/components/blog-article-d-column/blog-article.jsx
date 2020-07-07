import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 400,
  },
  header: {
    display: "flex",
  },
  date: {
    color: "hsl(130, 53%, 33%)",
  },
  categorie: {
    marginLeft: "3%",
    textTransform: "uppercase",
  },
  button: {
    color: "hsl(141, 53%, 53%)",
    "&:hover": {
      backgroundColor: "hsl(130, 53%, 33%)",
      borderColor: "hsl(130, 53%, 33%)",
      boxShadow: "none",
      color: "white",
    },
  },
});

const MediaCard = ({
  data: { id, title, subtitle, picture, categorie, date },
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
          <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button}>
          Lire l'article
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
