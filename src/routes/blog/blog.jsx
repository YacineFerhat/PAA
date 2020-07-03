import React from "react";
import DoubleTitle from "components/double-title";
import BlogArticle from "components/blog-article";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import article from "data/articles";
import MediaCard from "components/blog-article-d-column";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2%",
  },
  hero: {
    backgroundColor: "#eeeeee",
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
                Les Filtres
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
