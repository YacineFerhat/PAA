import React from "react";
import review from "data/review";
import ReviewBox from "components/review-box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EventBox from "components/event-box";
import eti1 from "assets/etiquettes/eti1.png";
import eti2 from "assets/etiquettes/eti2.png";
import Event from "components/event-box/event";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "6% 10% 0% 10%",
    backgroundColor: "white",
  },
  video: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontSize: "170px",
    fontFamily: "Ink Free",
    color: "black",
    fontWeight: "300",
    height: 300,
  },
  numbers: {},
  title: {
    paddingLeft: "5%",
    fontFamily: "Comic Sans MS",
  },
  grid: {
    padding: "5% 25% 0% 2%",
  },
  slogan: {
    marginTop: "5%",
    height: "150px",
    width: "100%",
    backgroundImage: "linear-gradient(to right, #66d366 50%, #009245)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "40px",
    fontFamily: "Inconsolata, monospace",
  },
  events: {
    marginTop: "10%",
    padding: "0 5% 0% 20%",
  },
  eventTitle: {
    paddingLeft: "5%",
    fontFamily: "Comic Sans MS",
  },
  desc: {
    display: "flex",
    padding: "0% 5%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
  etiq1: {
    height: 550,
    width: 700,
    position: "absolute",
    right: 0,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className="hero">
        <div className="hero-body">
          <div className={classes.video}>la vidéo</div>
        </div>
      </section>
      <section className={`hero is-fullwidth ${classes.numbers}`}>
        <Typography
          className={classes.title}
          color="textPrimary"
          variant="h3"
          gutterBottom
        >
          Plogging en chiffres !
        </Typography>
        <Grid
          className={classes.grid}
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
      </section>
      <section className={`hero is-fullwidth ${classes.events}`}>
        <div className="">
          <Typography
            className={classes.title && classes.eventTitle}
            color="textPrimary"
            variant="h3"
            gutterBottom
          >
            Evénement à venir !
          </Typography>
          <div className={`columns ${classes.event}`}>
            <div className={`column is-5 ${classes.desc}`}>
              Phrae d'accorce/ description à rajouter
            </div>
            <div className="column is-7">
              <Event />
            </div>
          </div>
        </div>
      </section>
      <section className="hero-is-fullwidth">
        <div className={classes.slogan}>"Ensemble on est plus fort"</div>
      </section>
    </div>
  );
};

export default Home;
/*
 Vous voulez préserver notre planète terre? nettoyer ses villes,
              plages et montagnes? Tout ceci dans une très bonne ambiance ? Ne
              réflaichissez plus ! Participiez à un de nos prochains événements
              (A travailler)
*/
