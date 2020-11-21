import React, { useEffect, useState } from "react";
import DoubleTitle from "components/double-title";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "components/blog-article-d-column";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useFetchArticles } from "hooks/useFetchArticles";
import { TagsData, categorieData } from "data/articleCategorie.js";
import { useFetchArticlesByCategories } from "hooks/useFetchArticlesByCategories";
import { useFetchArticlesByTags } from "hooks/useFetchArticlesByTags";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    padding: "2%",
  },

  title: {
    textTransform: "uppercase",
    marginLeft: "5%",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    fontSize: "20px",
    color: "rgba(92,143,62,1)",
  },
  button: {
    color: "white",
    margin: "3% 5%",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 100%)",
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/`
      );
      setArticles(data.data.article);
      setData(data.data.article);
    }
    fetchData();
  }, []);
  let categories = useFetchArticlesByCategories();
  let tags = useFetchArticlesByTags();
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (tag !== "" && category !== "") {
      setArticles(
        data.filter(
          (article) =>
            article.categories.includes(category) &&
            article.hashtags.includes(tag)
        )
      );
    } else if (tag !== "") {
      setArticles(data.filter((article) => article.hashtags.includes(tag)));
    } else {
      setArticles(
        data.filter((article) => article.categories.includes(category))
      );
    }
  }, [tag, category]);
  const handleFilterByTags = (event) => {
    setTag(event);
  };
  const handleFilterByCategories = (event) => {
    setCategory(event);
  };

  return (
    <section className={`hero ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          {" "}
          <DoubleTitle sub="Phrase d'accorche" title="Nos artircles" />
          <Grid className={classes.grid} container spacing={3}>
            <Grid item xs={12} sm={12} md={10} lg={9}>
              {articles.map((article) => (
                <MediaCard id={article.id} data={article} />
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={3}>
              <List
                className={classes.list}
                component="nav"
                aria-label="main mailbox folders"
              >
                <Typography className={classes.title} variant="h6" gutterBottom>
                  Catégories :
                </Typography>
                <Divider />

                {categories.map((categorie) => (
                  <ListItem
                    onClick={() => handleFilterByCategories(categorie)}
                    key={categorie}
                    button
                  >
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={categorie} />
                  </ListItem>
                ))}
              </List>
              <List
                style={{ marginTop: "10%" }}
                className={classes.list}
                component="nav"
                aria-label="main mailbox folders"
              >
                <Typography className={classes.title} variant="h6" gutterBottom>
                  Tags :
                </Typography>
                <Divider />

                {tags.map((tag) => (
                  <Button
                    onClick={() => handleFilterByTags(tag)}
                    id={tag}
                    className={classes.button}
                    variant="contained"
                  >
                    {tag}
                  </Button>
                ))}
              </List>
              {tag !== "" || category !== "" ? (
                <List
                  className={classes.list}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <Typography
                    className={classes.title}
                    variant="h6"
                    gutterBottom
                  >
                    Filtres actifs :
                  </Typography>
                  <Divider />

                  {tag !== "" && (
                    <ListItem button>
                      Tag :
                      <ListItemText primary={tag} />
                    </ListItem>
                  )}
                  {category !== "" && (
                    <ListItem button>
                      Catégorie :
                      <ListItemText primary={category} />
                    </ListItem>
                  )}
                </List>
              ) : null}
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Blog;
