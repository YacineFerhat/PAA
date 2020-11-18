import React from "react";
import Grid from "@material-ui/core/Grid";
import ReviewBox from "components/review-box";
import review from "data/review";

import { makeStyles } from "@material-ui/core/styles";
import calendrier from "assets/home/calendrier.png";

import espaceGris from "assets/home/espaceGT2.svg";
import ReactPlayer from "react-player/lazy";
import slogan2 from "assets/home/slogan3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  quote: {
    width: "100%",
    height: 300,
    margin: "0% 0% 5% 0%",
    backgroundColor: "#e5e5e5",
    display: "flex",
    justifyContent: "flex-start ",
    alignItems: "center",
  },
  text: {
    width: "40%",
    padding: "0% 3%",
    color: "black",
    fontSize: "35px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  planet: {
    color: "red",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    marginRight: "10px",
  },
  video: {
    height: 600,
    margin: "5% 0%",
  },
  number: {
    width: "100%",
    display: "flex",
    justifyontent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "auto",
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
    color: "#023302",
    fontSize: "30px",
    fontWeight: "900",
    marginTop: "8%",
  },
  secondLine: {
    marginLeft: "25px",
    display: "flex",
    alignItems: "flex-start",
  },
  grid: {
    marginTop: "2%",
  },
  event: {
    margin: "5% 0%",
  },
  eventContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calendrier: {
    width: "70%",
  },
  svg: {
    zIndex: 0,
    position: "absolute",
  },

  text2: {
    width: "45%",
    padding: "0% 2%",
    color: "black",
    fontSize: "25px",
  },
  span: {
    color: "red",
  },
  slogan: {
    backgroundSize: "100% 300px",
    backgroundRepeat: "no-repeat",
    height: 300,
    width: "100%",
    backgroundPosition: "center",
  },

  "@media (min-width: 950px)": {
    slogan: {
      backgroundSize: "100% 450px",
      height: 450,
    },
  },
  "@media (min-width: 800px)": {
    slogan: {
      backgroundSize: "100% 425px",
      height: 425,
    },
  },

  "@media (min-width: 650px)": {
    slogan: {
      backgroundSize: "100% 400px",
      height: 400,
    },
  },
  "@media (min-width: 500px)": {
    slogan: {
      backgroundSize: "100% 375px",
      height: 375,
    },
  },
  "@media (min-width: 400px)": {
    slogan: {
      backgroundSize: "100% 350px",
      height: 350,
    },
  },
  "@media (max-width: 700px)": {
    text: {
      fontSize: "30px",
    },
    planet: {
      fontSize: "18px",
      marginTop: "4px",
    },
  },
  "@media (max-width: 590px)": {
    text: {
      fontSize: "28px",
    },
    planet: {
      fontSize: "16px",
      marginTop: "3px",
    },
  },
  "@media (max-width: 560px)": {
    text: {
      fontSize: "25px",
    },
    planet: {
      fontSize: "14px",
      marginTop: "3px",
    },
  },
  "@media (max-width: 500px)": {
    text: {
      fontSize: "22px",
    },
    planet: {
      fontSize: "11px",
      marginTop: "2px",
    },
  },
  "@media (max-width: 445px)": {
    text: {
      fontSize: "20px",
    },
    planet: {
      fontSize: "10px",
      marginTop: "2px",
    },
  },
  "@media (max-width: 415px)": {
    text: {
      fontSize: "18px",
    },
    planet: {
      fontSize: "9px",
      marginTop: "1px",
    },
  },
  "@media (max-width: 370px)": {
    text: {
      fontSize: "16px",
    },
    planet: {
      fontSize: "8px",
      marginTop: "0.5px",
    },
  },
  "@media (max-width: 325px)": {
    text: {
      fontSize: "14px",
    },
    planet: {
      fontSize: "7px",
      marginTop: "0.2px",
    },
  },
}));
const HomePhone = () => {
  const classes = useStyles();
  let link = "https://www.youtube.com/watch?v=MnYNZ42Pwxc";

  return (
    <div className={classes.root}>
      <ReactPlayer
        className={classes.video}
        playing={false}
        width="100%"
        url={link}
      />
      <div className={classes.number}>
        <img src={espaceGris} className={classes.svg} alt="svg" />
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
      <div
        className={classes.slogan}
        style={{
          backgroundImage: `url(${slogan2})`,
        }}
      ></div>
    </div>
  );
};

export default HomePhone;
