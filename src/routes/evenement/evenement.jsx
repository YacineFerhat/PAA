import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import event from "data/event";
import EventCard from "components/event-card";
import Media from "components/media-event";

const useStyles = makeStyles((theme) => ({
  oldEvent: {},
  oldEv: {
    marginTop: "50px",
    color: "#177a63",
    textAlign: "center",
    marginBottom: "55px",
  },
  oldEvs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  oldEventsDisplay: {
    marginTop: "2%",
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
      <h1 className={`${classes.oldEv} title is-3`} style={{ marginTop: "3%" }}>
        Prochains évenements{" "}
      </h1>
      <div className={classes.oldEvs}>
        {event.map((ev) => (
          <EventCard key={ev.id} data={ev} />
        ))}
      </div>
      <h1 className={`${classes.oldEv} title is-3`} style={{ marginTop: "3%" }}>
        Anciens évenements
      </h1>
      <h1 className={`${classes.oldEv} subtitle is-5 has-text-black`}>
        Vous avez raté un de nos événements? ou vous voulez simplement voir ce
        que nous avons déjà fait? Pas de soucis, voici la liste de nos anciens
        évenements (A travailler)
      </h1>
      <div className="container">
        <div
          className={`columns is-centered is-multiline ${classes.oldEventsDisplay}`}
        >
          {event.map((data) => (
            <div key={data.id} className="column is-4">
              <Media data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
