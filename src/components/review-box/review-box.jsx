import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useCountUp } from "react-countup";

const useStyles = makeStyles({
  root: {
    height: 200,
  },
  figure: {
    height: 100,
  },
  icon: {
    height: 75,
    width: 75,
  },
  title: {
    fontFamily: "Comic Sans MS",
    fontSize: "16px",
  },
});

const ReviewBox = ({ data: { title, icon, number } }) => {
  const { countUp } = useCountUp({
    start: 0,
    end: number,
    duration: 5,
  });
  const classes = useStyles();
  return (
    <div className={`has-text-centered ${classes.root}`}>
      <div className={classes.figure}>
        {" "}
        <img className={classes.icon} src={icon} />
      </div>
      <Typography color="textPrimary" variant="h4" gutterBottom>
        {countUp}
      </Typography>
      <Typography
        className={classes.title}
        color="textPrimary"
        variant="h6"
        gutterBottom
      >
        {title}
      </Typography>
    </div>
  );
};
export default ReviewBox;
