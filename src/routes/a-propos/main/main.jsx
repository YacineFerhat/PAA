import React from "react";
import MediaCard from "components/media-card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaAbout from "data/media-about";
import DoubleTitle from "components/double-title";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "5% 0%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <section className="hero is-fullheight">
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            title=" PLOGGING ASSOCIATION ALGERIA"
            sub="Venez découvrir Plogging Association Algeria !"
          />
          <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              {MediaAbout.map((media) => (
                <Grid
                  className={classes.grid}
                  key={media.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={2}
                >
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
