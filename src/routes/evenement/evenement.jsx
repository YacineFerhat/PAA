import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import event from "data/event";
import EventCard from "components/event-card";
import data from "data/carouselActivities";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const useStyles = makeStyles((theme) => ({
  oldEvent: {
    marginBottom: "50px",
    width: "100%",
    margin: "auto",
  },
  oldEv: {
    marginTop: "50px",
    fontSize: "3em",
    color: "#177a63",
    textAlign: "center",
    marginBottom: "55px",
  },
  oldEvs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));
const Event = () => {
  const [index, setIndex] = useState(0);
  const handleIndex = (i) => {
    setIndex(i);
  };
  const classes = useStyles();
  return (
    <section className={classes.oldEvent}>
      <h1 className={classes.oldEv}>Prochains évenements</h1>
      <div className={classes.oldEvs}>
        {event.map((ev) => (
          <EventCard key={ev.id} data={ev} />
        ))}
      </div>

      <h1 className={classes.oldEv}>Anciens évenements</h1>
    </section>
  );
};

export default Event;
