import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles({
  root: {
    height: 100,
    backgroundColor: "green",
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0% 5% 0% 5%",
  },
  color: {
    color: "white",
  },
  current: {
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  oldOne: {},
});

const BreadCrumb = () => {
  const classes = useStyles();
  let location = useLocation().pathname.split("/");

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.color}>
        {location[location.length - 1]}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" className={classes.color}>
        {location.map((link) => (
          <Link
            color="inherit"
            className={
              location.lastIndexOf(link) === location.length - 1
                ? classes.current
                : classes.oldOne
            }
            href={link === "" ? "/" : link}
          >
            {link === "" ? "Accueil" : link}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumb;
