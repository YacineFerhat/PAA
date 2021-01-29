import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: 200,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rootPhone: {
    height: 110,
  },
  figure: {
    height: 100,
    width: 100,
  },
  figurePhone: {
    height: 50,
  },
  icon: {
    height: 75,
    width: 75,
  },
  iconPhone: {
    height: 45,
    width: 45,
  },
  data: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "arial",
    fontSize: "18px",
    color: "#bdfcdb",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
  },
  titlePhone: {
    fontFamily: "arial",
    fontSize: "12px",
    color: "#bdfcdb",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
  },
  number: {
    fontWeight: "bold",
    fontSize: "30px",
    color: "#bdfcdb",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
  },

  "@media (max-width: 1250px)": {
    root: {
      height: 180,
    },
    icon: {
      height: 60,
      width: 60,
    },
    number: {
      fontSize: "18px",
    },
    title: {
      fontSize: "15px",
    },
  },
  "@media (min-width: 1500px)": {
    root: {
      height: 250,
    },
    icon: {
      height: 90,
      width: 90,
    },
    number: {
      fontSize: "30px",
    },
    title: {
      fontSize: "20px",
    },
  },
  "@media (min-width: 1800px)": {
    root: {
      height: 300,
    },
    icon: {
      height: 100,
      width: 100,
    },
    number: {
      fontSize: "32px",
    },
    title: {
      fontSize: "22px",
    },
  },
  "@media (min-width: 2100px)": {
    root: {
      height: 300,
    },
  },
  "@media (min-width: 2200px)": {
    root: {
      height: 350,
    },
    icon: {
      height: 110,
      width: 110,
    },
    number: {
      fontSize: "34px",
    },
    title: {
      fontSize: "24px",
    },
  },
});

const ReviewBox = ({ data: { title, icon, number, id }, style }) => {
  const classes = useStyles();
  return (
    <div
      className={`has-text-centered ${
        style !== "phone" ? classes.root : classes.rootPhone
      }`}
    >
      <div className={style !== "phone" ? classes.figure : classes.figurePhone}>
        {" "}
        <img
          alt={title}
          className={style !== "phone" ? classes.icon : classes.iconPhone}
          src={icon}
        />
      </div>
      <div className={classes.data}>
        <Typography className={classes.number} color="textPrimary" gutterBottom>
          {number}
        </Typography>
        <Typography
          className={style !== "phone" ? classes.title : classes.titlePhone}
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};
export default ReviewBox;
