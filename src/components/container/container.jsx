import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "6% 10% 0% 10%",
    backgroundColor: "white",
  },
  "@media (max-width: 1114px)": {
    root: {
      margin: "0%",
    },
  },
}));

const Container = withRouter(({ location, children }) => {
  const classes = useStyles();
  return (
    <div
      className={
        location.pathname.includes("admin") ||
        location.pathname.includes("Admin")
          ? null
          : classes.root
      }
    >
      {children}
    </div>
  );
});

export default Container;
