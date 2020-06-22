import React from "react";
import MediaCard from "components/media-card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaAbout from "data/media-about";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <section className="hero is-fullheight">
      <div className="hero-main">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title is-4 " style={{ marginTop: "3%" }}>
              PLOGGING ASSOCIATION ALGERIA
            </h1>
            <h1 className="subtitle is-6">
              Venez découvrir Plogging Association Algeria !
            </h1>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3}>
              {MediaAbout.map((media) => (
                <Grid key={media.id} item xs={12} sm={6} md={3} xl={12}>
                  <MediaCard data={media} className={classes.paper}>
                    xs=12
                  </MediaCard>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
