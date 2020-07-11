import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlaceIcon from "@material-ui/icons/Place";
const useStyles = makeStyles((theme) => ({
  calendar: {
    height: 75,
    width: 75,
    backgroundColor: "#177a63",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10%",
  },
  day: {
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
  },
  month: {
    color: "white",
    fontSize: "18px",
  },
  location: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: "#177a63",
  },
  link: {
    color: "rgb(226, 65, 65)",
    cursor: "pointer",

    "&:hover": {
      color: "#177a63",
    },
  },
}));

const Media = ({ data: { title, time, place } }) => {
  const classes = useStyles();
  return (
    <article className="media">
      <div className="media-left">
        <div className={classes.calendar}>
          <div className={classes.day}>15</div>
          <div className={classes.month}>Jul</div>
        </div>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{title}</strong>
            <div className={classes.location}>
              {" "}
              <PlaceIcon className={classes.icon} /> {place}
            </div>
            <div className={classes.link}>voir l'événement</div>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Media;
