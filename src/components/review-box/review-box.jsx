import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useCountUp } from "react-countup";

const useStyles = makeStyles({
  root: {
    height: 200,
  },
  rootPhone: {
    height: 110,
  },
  figure: {
    height: 100,
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
  title: {
    fontFamily: "Comic Sans MS",
    fontSize: "16px",
  },
  titlePhone: {
    fontFamily: "Comic Sans MS",
    fontSize: "12px",
  },
});

const ReviewBox = ({ data: { title, icon, number, style } }) => {
  const { countUp } = useCountUp({
    start: 0,
    end: number,
    duration: 5,
  });
  const classes = useStyles();
  return (
    <div
      className={`has-text-centered ${
        style === "phone" ? classes.root : classes.rootPhone
      }`}
    >
      <div className={style === "phone" ? classes.figure : classes.figurePhone}>
        {" "}
        <img
          alt={title}
          className={style === "phone" ? classes.icon : classes.iconPhone}
          src={icon}
        />
      </div>
      <Typography color="textPrimary" gutterBottom>
        {countUp}
      </Typography>
      <Typography
        className={style === "phone" ? classes.title : classes.titlePhone}
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
    </div>
  );
};
export default ReviewBox;
