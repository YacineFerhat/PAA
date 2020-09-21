import React from "react";
import Grid from "@material-ui/core/Grid";
import ReviewBox from "components/review-box";
import review from "data/review";

import { makeStyles } from "@material-ui/core/styles";
import calendrier from "assets/home/calendrier.png";

import espace1 from "assets/home/espaceGrisTel.png";
import ReactPlayer from "react-player/lazy";
import slogan from "assets/home/slogan.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  quote: {
    width: "100%",
    height: 250,
    backgroundColor: "#e5e5e5",
    verticalAlign: "baseline",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    height: 600,
  },
  number: {
    position: "relative",
    width: "100%",
  },
  espace1: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontFamily: "Autolinker",
    zIndex: 2,
    marginTop: "4%",
    color: "#023302",
    fontSize: "30px",
    fontWeight: "900",
  },
  grid: {
    marginTop: "2%",
  },
  event: {
    marginTop: "5%",
  },
  eventContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calendrier: {
    width: "70%",
  },
}));
const HomePhone = () => {
  const classes = useStyles();
  let link = "https://www.youtube.com/watch?v=MnYNZ42Pwxc";

  return (
    <div className={classes.root}>
      <div className={classes.quote}>PHOTO+Quote</div>
      <ReactPlayer
        className={classes.video}
        playing={false}
        width="100%"
        url={link}
      />
      <div className={classes.number}>
        <div className={classes.title}>Plogging en chiffres !</div>
        <Grid
          className={classes.grid}
          direction="row"
          justify="space-evenly"
          alignItems="center"
          container
          spacing={3}
        >
          {review.map((data) => (
            <Grid key={data.id} item xs={4} sm={3} md={4} lg={2} xl={2}>
              <ReviewBox style={"phone"} className="column is-2" data={data} />
            </Grid>
          ))}{" "}
        </Grid>{" "}
      </div>
      <div className={classes.event}>
        <div className={classes.title}>&Eacute;vénement à venir !</div>
        <div className={classes.eventContainer}>
          <img
            src={calendrier}
            className={classes.calendrier}
            alt="calendrier"
          />
        </div>
      </div>{" "}
      <div className={classes.quote}>PHOTO+Quote</div>
    </div>
  );
};

export default HomePhone;
