import React from "react";
import { useParams } from "react-router-dom";
import article from "data/articles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 400,
  },
  header: {
    display: "flex",
    marginTop: "2%",
  },
  date: {
    color: "#177a63",
  },
  categorie: {
    marginLeft: "3%",
    textTransform: "uppercase",
  },
  tag: {
    textWeight: "bold",
  },
  body: {
    textIndent: "20px",
    lineHeight: "35px",
  },
  button: {
    color: "white",
    backgroundColor: "#177a63",
    "&:hover": {
      backgroundColor: "#233015",
    },
  },
}));

const BlogArticle = () => {
  const classes = useStyles();
  //Full static for now, I'll add routes once we do the backend
  let idArticle = useParams().id;
  let filteredData = article[0];
  console.log(filteredData);
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className={`container `}>
          <Typography gutterBottom variant="h3" component="h2">
            {filteredData.title}
          </Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            className={classes.media}
            image={filteredData.picture}
            title={filteredData.title}
          />
          <div className={classes.header}>
            <Typography
              gutterBottom
              className={classes.date}
              variant="subtitle1"
              component="h2"
            >
              {filteredData.date}
            </Typography>
            <Typography
              gutterBottom
              className={classes.categorie}
              variant="subtitle1"
              component="h2"
            >
              {filteredData.categorie}
            </Typography>
          </div>{" "}
          <Typography
            className={classes.tag}
            gutterBottom
            variant="h5"
            component="h2"
          >
            #ProtégonsNotrePlanète
          </Typography>
          <Typography variant="body1" className={classes.body} gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quos blanditiis
            tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat
            deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
            suscipit, quam beatae rerum inventore consectetur, neque doloribus,
            cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
            quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
            rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quos blanditiis
            tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat
            deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <CardActions>
            <Button size="small" className={classes.button}>
              Lire l'article
            </Button>
          </CardActions>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
