import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import event from "data/event";
import EventCard from "components/event-card";
const useStyles = makeStyles((theme) => ({
  oldEvent: {
    marginBottom: "50px",
    width: "100%",
    margin: "auto",
  },
  oldEv: {
    marginTop: "50px",
    fontSize: "4em",
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
  const classes = useStyles();
  return (
    <section className={classes.oldEvent}>
      <h1 class={classes.oldEv}>Anciens évenements</h1>
      <div class={classes.oldEvs}>
        {event.map((ev) => (
          <EventCard key={ev.id} data={ev} />
        ))}
      </div>
    </section>
  );
};

export default Event;
