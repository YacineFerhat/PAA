import React from "react";
import review from "data/review";
import ReviewBox from "components/review-box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Arbre from "assets/home/arbreSH.png";
import espaceG from "assets/home/espaceG.svg";
import espaceD from "assets/home/espaceD.svg";
import oiseau1 from "assets/home/oiseau1.png";
import oiseau2 from "assets/home/oiseau2.png";
import oiseau3 from "assets/home/oiseau3.png";
import oiseau4 from "assets/home/oiseau4.png";
import oiseau5 from "assets/home/oiseau5.png";
import calendrier from "assets/home/calendrier.png";
import lampe from "assets/home/lampe.png";
import recyclage from "assets/home/recyclage.png";
import quote from "assets/home/quote.jpg";
import ReactPlayer from "react-player/lazy";
import slogan from "assets/home/slogan.jpg";
import { useFetchDisplayInfo } from "hooks/useFetchDisplayInfo";

const useStyles = makeStyles((theme) => ({
  root: {},
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
  numbers: {
    position: "relative",
  },
  titleContainer: {
    padding: "9% 30% 0% 0%",
  },
  title: {
    textAlign: "center",
    paddingLeft: "5%",
    fontFamily: "Autolinker",
    color: "#023302",
    fontSize: "35px",
    fontWeight: "900",
  },
  grid: {
    padding: "0% 35% 0% 2%",
    marginTop: "2%",
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
    position: "relative",
    marginBottom: "15%",
  },
  birdContainer: {
    position: "absolute",
    height: 400,
    width: 500,
  },
  eventTitle: {
    paddingLeft: "5%",
    fontFamily: "Comic Sans MS",
  },
  desc: {
    display: "flex",
    padding: "0% 5%",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "20px",
  },
  etiq1: {
    height: 550,
    width: 700,
    position: "absolute",
    right: 0,
  },
  arbreImg: {
    position: "absolute",
    height: 400,
    width: 450,
    right: -130,
    top: -10,
  },
  youtube: {
    height: 750,
  },
  "@media (min-width: 1050px)": {
    arbreImg: {
      height: 400,
      width: 450,
      right: -130,
      top: -10,
    },
  },
  "@media (min-width: 1200px)": {
    arbreImg: {
      height: 425,
      width: 475,
      right: -130,
      top: -10,
    },
  },
  "@media (min-width: 1300px)": {
    arbreImg: {
      height: 450,
      width: 500,
      right: -130,
      top: -10,
    },
  },
  "@media (min-width: 1400px)": {
    arbreImg: {
      height: 475,
      width: 525,
      right: -130,
      top: -10,
    },
  },
  "@media (min-width: 1500px)": {
    title: {
      fontSize: "38px",
    },
    arbreImg: {
      height: 525,
      width: 575,
      right: -130,
      top: -10,
    },
  },
  "@media (min-width: 1600px)": {
    arbreImg: {
      position: "absolute",
      height: 550,
      width: 600,
      right: -130,
    },
    title: {
      fontSize: "42px",
    },
  },
  "@media (min-width: 1700px)": {
    arbreImg: {
      position: "absolute",
      height: 600,
      width: 650,
      right: -130,
    },
    title: {
      fontSize: "48px",
    },
  },
  "@media (min-width: 1900px)": {
    arbreImg: {
      position: "absolute",
      height: 650,
      width: 700,
      right: -130,
    },
    title: {
      fontSize: "56px",
    },
  },
  "@media (min-width: 2100px)": {
    title: {
      fontSize: "60px",
    },
    arbreImg: {
      position: "absolute",
      height: 650,
      width: 700,
      right: -130,
    },
  },
  "@media (min-width: 2200px)": {
    arbreImg: {
      position: "absolute",
      height: 700,
      width: 750,
      right: -130,
      top: 0,
    },
  },
  "@media (min-width: 2300px)": {
    arbreImg: {
      position: "absolute",
      height: 725,
      width: 775,
      right: -130,
      top: 20,
    },
  },
  "@media (min-width: 2400px)": {
    arbreImg: {
      position: "absolute",
      height: 750,
      width: 800,
      right: -130,
      top: 30,
    },
  },
  espace1: {
    position: "absolute",
    zIndex: 0,
  },
  espaceD: {
    position: "absolute",
    zIndex: 0,
    left: 2.5,
    top: -120,
  },
  icon: {
    height: 150,
    width: 90,
  },

  bird1: {
    position: "absolute",
    top: 220,
    left: -90,
  },
  bird2: {
    position: "absolute",
    top: 120,
    left: -90,
  },
  bird3: {
    position: "absolute",
    top: 20,
  },
  bird4: {
    position: "absolute",
    left: 100,
    top: -30,
  },
  bird5: {
    position: "absolute",
    left: 300,
    top: -60,
  },
  quote: {
    width: "45%",
    padding: "0% 5%",
    color: "white",
    fontSize: "50px",
  },
  calendrier: {},
}));

const Home = () => {
  const classes = useStyles();
  const info = useFetchDisplayInfo();
  let link = "https://www.youtube.com/watch?v=MnYNZ42Pwxc";
  return (
    <div className={classes.root}>
      <section className="hero">
        <ReactPlayer width="100%" classes={classes.youtube} url={link} />
      </section>
      <section className={`hero is-fullwidth ${classes.numbers}`}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title} gutterBottom>
            Plogging en chiffres !
          </Typography>
        </div>
        <img src={Arbre} className={classes.arbreImg} />
        <Grid
          className={classes.grid}
          direction="row"
          justify="space-evenly"
          alignItems="center"
          container
          spacing={3}
        >
          {info.map((data) => (
            <Grid key={data.id} item xs={6} sm={6} md={2} lg={2} xl={2}>
              <ReviewBox style={"laptop"} className="column is-2" data={data} />
            </Grid>
          ))}{" "}
        </Grid>
        <img src={espaceG} className={classes.espace1} />
      </section>
      <section className={`hero is-fullwidth ${classes.events}`}>
        <div className={classes.birdContainer}>
          <img src={oiseau5} className={classes.bird1} />
          <img src={oiseau4} className={classes.bird2} />
          <img src={oiseau3} className={classes.bird3} />
          <img src={oiseau2} className={classes.bird4} />
          <img src={oiseau1} className={classes.bird5} />
        </div>
        <img src={espaceD} className={classes.espaceD} />

        <div className={classes.titleContainer}>
          <Typography
            className={classes.title}
            color="textPrimary"
            variant="h3"
            gutterBottom
          >
            Evénement à venir !
          </Typography>
        </div>
        <div className={`columns ${classes.event}`}>
          <div className={`column is-6 ${classes.desc}`}>
            <img src={recyclage} className={classes.icon} />
            <img src={lampe} className={classes.icon} />
          </div>
          <div className="column is-6">
            <img src={calendrier} className={classes.calendrier} />
          </div>
        </div>
      </section>
      <section
        className=" hero is-medium"
        style={{
          backgroundImage: `url(${slogan})`,
          height: "500px",
          backgroundSize: "100% 500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center ",
          alignItems: "flex-start",
        }}
      >
        <div className={classes.quote}>
          It's not my garbage, but it's my planet
        </div>
      </section>
    </div>
  );
};

export default Home;
