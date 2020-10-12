import React from "react";
import DoubleTitle from "components/double-title";
import BlogArticle from "components/blog-article";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import article from "data/articles";
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
    color: "#177a63",
  },
  button: {
    margin: "3% 5%",
    "&:hover": {
      color: "white",
      backgroundColor: "#177a63",
    },
  },
}));

const Blog = () => {
  const classes = useStyles();
  const data = useFetchArticles();
  console.log(data);
  return (
    <section className={`hero ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          {" "}
          <DoubleTitle sub="Phrase d'accorche" title="Nos artircles" />
          <Grid className={classes.grid} container spacing={3}>
            <Grid item xs={12} sm={12} md={10} lg={9}>
              {data.map((article) => (
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

                {categorieData.map((categorie) => (
                  <ListItem key={categorie.id} button>
                    <ListItemIcon>
                      <ArrowForwardIosIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={categorie.title} />
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

                {TagsData.map((categorie) => (
                  <Button
                    id={categorie.id}
                    className={classes.button}
                    variant="contained"
                  >
                    {categorie.title}
                  </Button>
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Blog;
