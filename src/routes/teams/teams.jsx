import React from "react";
import DoubleTitle from "components/double-title";
import MediaCard from "components/media-card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import team from "data/team";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    padding: "0% 2%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Teams = () => {
  const classes = useStyles();

  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            sub="Venez découvrir les teams de PAA"
            title="Nos teams!"
          />

          <div>
            {" "}
            <Grid
              container
              spacing={3}
              justify="center"
              className={classes.grid}
              alignItems="center"
            >
              {team.map((media) => (
                <Grid key={media.id} item xs={12} sm={6} md={4} xl={3}>
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

export default Teams;
