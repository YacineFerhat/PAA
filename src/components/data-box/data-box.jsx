import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    margin: "0% 5%",
  },
  date: {
    fontSize: "35px",
    fontWeight: "bold",
    height: 170,
  },
  title: {
    fontSize: "20px",
  },
  iconButton: {
    marginTop: "10%",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.8,
    },
  },
  icon: {
    color: "#234915",
  },
}));
const DataBox = ({ data: { title, date } }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.date}>{date}</div>
      <div className={classes.title}>{title}</div>
      <Link to="/Evenements">
        <IconButton aria-label="delete" className={classes.iconButton}>
          <AddIcon className={classes.icon} fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default DataBox;
