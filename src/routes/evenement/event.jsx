import React from "react";
import DoubleTitle from "components/double-title";
import { makeStyles } from "@material-ui/core/styles";
import { useFetchLogosAssociations } from "hooks/useFetchLogosAssociations";
import { useFetchLogosSponsors } from "hooks/useFetchLogosSponsors";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Autolinker",
  },
  msg: {
    fontSize: "40px",
    color: "red",
    marginTop: "2%",
    textAlign: "center",
  },
}));
const Event = () => {
  const classes = useStyles();
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            sub="Découvrez notre prochain évènement!"
            title="Evènements"
          />
          <h1 className={classes.msg}>
            Au vu de la situation actuelle, aucun évènement n'est programmé.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Event;
