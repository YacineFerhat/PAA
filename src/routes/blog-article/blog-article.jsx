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
import { useFetchArticleByTitle } from "hooks/useFetchArticleByTitle";
const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 400,
  },
  title: {
    padding: "2% 0%",
    textAlign: "center",
  },
  dataContainer: {
    display: "flex",
    padding: "2%",
    flexDirection: "column",
  },
  header: {
    display: "flex",
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
  let filteredData = article[0];
  let data = useFetchArticleByTitle(useParams().title);
  const { title, date, hashtags, description, categories, picture } = data;
  console.log(hashtags);
  let descToShow = description ? description[0] : [];
  console.log(descToShow);
  //let descToShow = data ? data.description.blocks : null;
  //console.log(descToShow);
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className={`container `}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h3"
            component="h2"
          >
            {title}
          </Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            className={classes.media}
            title={title}
            image={`http://localhost:4000/${picture}`}
          />
          <div className={classes.dataContainer}>
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
                {categories}
              </Typography>
            </div>
            <Typography
              className={classes.tag}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {hashtags?.map((hash) => (
                <span>#{hash}</span>
              ))}
            </Typography>
            <Typography
              variant="body1"
              className={classes.body}
              gutterBottom
            ></Typography>
          </div>{" "}
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
