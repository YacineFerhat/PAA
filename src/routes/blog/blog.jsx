import React from "react";
import DoubleTitle from "components/double-title";
import BlogArticle from "components/blog-article";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import article from "data/articles";
import MediaCard from "components/blog-article-d-column";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";

import { TagsData, categorieData } from "data/articleCategorie.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2%",
  },
  hero: {
    backgroundColor: "#eeeeee",
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
  return (
    <section className={`hero ${classes.hero}`}>
      <div className="hero-main">
        <div className="container">
          {" "}
          <DoubleTitle sub="Phrase d'accorche" title="Nos artircles" />
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={10} lg={9}>
                {article.map((data) => (
                  <MediaCard id={data.id} data={data} />
                ))}
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={3}>
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
                  <Typography
                    className={classes.title}
                    variant="h6"
                    gutterBottom
                  >
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
      </div>
    </section>
  );
};

export default Blog;
