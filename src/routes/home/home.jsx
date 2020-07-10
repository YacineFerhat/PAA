import React from "react";
import review from "data/review";
import ReviewBox from "components/review-box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EventBox from "components/event-box";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginBottom: "10%",
    marginTop: "10%",
  },
  slogan: {
    marginTop: "5%",
    height: "150px",
    width: "100%",
    backgroundColor: "#234915",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "40px",
    fontFamily: "Inconsolata, monospace",
  },
  events: {},
  desc: {
    display: "flex",
    padding: "0% 5%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          La video d'intro viendra ici et jouera en fond d'écran Un text sera
          aussi affiché par dessus
        </div>
      </section>
      <div className="hero is-fullwidth">
        <div className="container has-text-centered">
          <Typography
            className={classes.title}
            color="textPrimary"
            variant="h3"
            gutterBottom
          >
            Plogging en chiffres !
          </Typography>
        </div>
        <Grid
          direction="row"
          justify="space-evenly"
          alignItems="center"
          container
          spacing={3}
        >
          {review.map((data) => (
            <Grid key={data.id} item xs={6} sm={6} md={4} lg={2} xl={2}>
              <ReviewBox className="column is-2" data={data} />
            </Grid>
          ))}{" "}
        </Grid>
        <div className={classes.slogan}>"Ensemble on est plus fort"</div>
        <div className=" has-text-centered">
          <Typography
            className={classes.title}
            color="textPrimary"
            variant="h3"
            gutterBottom
          >
            Nos prochains événements !
          </Typography>
          <div className={`columns ${classes.events}`}>
            <div className="column is-7">
              <EventBox />
            </div>
            <div className={`column is-5 ${classes.desc}`}>
              Vous voulez préserver notre planète terre? nettoyer ses villes,
              plages et montagnes? Tout ceci dans une très bonne ambiance ? Ne
              réflaichissez plus ! Participiez à un de nos prochains événements
              (A travailler)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
