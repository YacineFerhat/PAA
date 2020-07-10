import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DataBox from "components/data-box";
import event from "data/event";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#234915",
    height: 450,
    borderRadius: "10%",
    margin: "0% 10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const EventBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {event.map((e) => (
        <DataBox key={e.id} data={e} />
      ))}
    </div>
  );
};

export default EventBox;
