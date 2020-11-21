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
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    width: "100%",
    height: "auto",
  },
  title: {
    fontFamily: "Comic Sans MS",
    padding: "2% 0%",
    fontWeight: 600,
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
    fontFamily: "Comic Sans MS",

    marginLeft: "3%",
    textTransform: "uppercase",
  },
  tag: {
    textWeight: "bold",
    fontFamily: "Comic Sans MS",
  },
  body: {
    fontFamily: "Comic Sans MS",
    textIndent: "20px",
    lineHeight: "35px",
  },
  button: {
    color: "white",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 100%)",
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

const BlogArticle = () => {
  const classes = useStyles();
  let data = useFetchArticleByTitle(useParams().title);
  const { title, date, hashtags, description, categories, picture } = data;
  let history = useHistory();
  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "Chargement des données.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  };
  const convertCommentFromJSONToHTML = (text) => {
    return stateToHTML(convertFromRaw(text));
  };
  const display = data.description === undefined ? content : data.description;
  const handlePushHistory = () => {
    history.push("/Articles");
  };
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className={`container `}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h4"
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
            image={`${process.env.REACT_APP_PICTURE_URL}/${picture}`}
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
            <Typography variant="body1" className={classes.body} gutterBottom>
              <div
                dangerouslySetInnerHTML={{
                  __html: convertCommentFromJSONToHTML(display),
                }}
              />
            </Typography>
          </div>{" "}
          <CardActions>
            <Button
              onClick={handlePushHistory}
              size="small"
              className={classes.button}
            >
              Lire les autres articles
            </Button>
          </CardActions>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
