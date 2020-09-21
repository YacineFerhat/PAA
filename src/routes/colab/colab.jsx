import React from "react";
import DoubleTitle from "components/double-title";
import colab from "data/colab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Colab = () => {
  const classes = useStyles();
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle sub="Phrase d'accorche" title="Collaborateurs" />
          <div
            style={{ marginTop: "4%" }}
            className="columns is-centered is-multiline is-mobile is-tablet is-widescreen is-fullhd"
          >
            {colab.map((image) => (
              <div
                key={image.id}
                style={{ display: "flex", justifyContent: "center" }}
                className="column  is-6-mobile is-4-tablet is-3-desktop   is-3-widescreen is-2-fullhd"
              >
                <figure className=" image is-128x128">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={image.picture}
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colab;
