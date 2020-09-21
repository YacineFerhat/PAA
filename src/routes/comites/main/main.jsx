import React from "react";
import MediaCard from "components/media-card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DoubleTitle from "components/double-title";
import Comites from "data/comites";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: "0% 2%",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <section className={`hero is-fullheight ${classes.root} `}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            title="Nos comités"
            sub="Venez découvrir les différents comités de PAA!"
          />{" "}
          <Grid
            container
            spacing={3}
            justify="center"
            className={classes.grid}
            alignItems="center"
          >
            {Comites.map((media) => (
              <Grid key={media.id} item xs={12} sm={6} md={4} xl={3}>
                <MediaCard data={media} className={classes.paper}>
                  xs=12
                </MediaCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Main;
