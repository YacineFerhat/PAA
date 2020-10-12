import React from "react";
import DoubleTitle from "components/double-title";
import MediaCard from "components/media-card-db";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import team from "data/team";
import { useFetchTeams } from "hooks/useFetchTeams";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
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

const Teams = () => {
  const classes = useStyles();
  const data = useFetchTeams();
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            sub="Venez découvrir les teams de PAA"
            title="Nos teams!"
          />

          <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              {data?.map((media) => (
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

export default Teams;
