import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useCountUp } from "react-countup";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: "5% 2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  figure: {
    height: 100,
  },
  icon: {
    width: 75,
    height: 75,
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
      <Typography color="textPrimary" variant="h6" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};
export default ReviewBox;
