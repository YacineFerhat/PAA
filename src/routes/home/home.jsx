import React, { useState, useEffect } from "react";
import ReviewBox from "components/review-box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import slogan from "assets/home/slogan3.jpg";
import { useFetchDisplayInfo } from "hooks/useFetchDisplayInfo";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

const useStyles = makeStyles((theme) => ({
  video: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontSize: "170px",
    color: "black",
    fontWeight: "300",
    height: 300,
  },
  numbers: {
    position: "relative",
    marginTop: 50,
  },
  titleContainer: {
    padding: "9% 30% 0% 0%",
  },
  title: {
    textAlign: "center",
    paddingLeft: "5%",
    fontSize: "35px",
    title: "arial",
    fontWeight: "500",
    color: "black",
  },
  grid: {
    marginTop: "2%",
  },

  "@media (min-width: 1500px)": {
    title: {
      fontSize: "38px",
    },
  },
  "@media (min-width: 1600px)": {
    title: {
      fontSize: "42px",
    },
  },

  "@media (min-width: 1700px)": {
    title: {
      fontSize: "48px",
    },
  },
  "@media (min-width: 1900px)": {
    title: {
      fontSize: "56px",
    },
  },
  "@media (min-width: 2100px)": {
    title: {
      fontSize: "60px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const info = useFetchDisplayInfo();
  let link = "https://www.youtube.com/watch?v=MnYNZ42Pwxc";

  const mediaMatch = window.matchMedia("(min-width: 1600px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);
  console.log(matches);
  let height = matches ? 950 : 750;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6} sm={12}>
          <Player
            fluid
            playsInline
            poster={slogan}
            src="https://www.youtube.com/watch?v=MnYNZ42Pwxc"
          />
        </Grid>

        <Grid item md={6} sm={12}>
          Evenements!
        </Grid>
      </Grid>
      <section className={`hero is-fullwidth ${classes.numbers}`}>
        <Typography className={classes.title} gutterBottom>
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
          {info.map((data) => (
            <Grid key={data.id} item xs={6} sm={6} md={2} lg={2} xl={2}>
              <ReviewBox style={"laptop"} className="column is-2" data={data} />
            </Grid>
          ))}{" "}
        </Grid>
      </section>
    </div>
  );
};

export default Home;
