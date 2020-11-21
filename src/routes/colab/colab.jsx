import React from "react";
import DoubleTitle from "components/double-title";
import { makeStyles } from "@material-ui/core/styles";
import { useFetchLogosAssociations } from "hooks/useFetchLogosAssociations";
import { useFetchLogosSponsors } from "hooks/useFetchLogosSponsors";
const useStyles = makeStyles((theme) => ({
  root: {},
  subTitle: {
    fontSize: "25px",
    fontWeight: "900",
    fontFamily: "Autolinker",
    color: "#023302",
  },
}));
const Colab = () => {
  let sponsors = useFetchLogosSponsors();
  let associations = useFetchLogosAssociations();
  console.log(associations);
  const classes = useStyles();
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle sub="Ils nous font confiance!" title="Collaborateurs" />

          {associations?.length !== 0 && (
            <div
              style={{
                marginTop: "2%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="columns is-centered is-multiline is-mobile is-tablet is-widescreen is-fullhd"
            >
              <h1 className={classes.subTitle}>Associations & amis</h1>
              {associations?.map((image) => (
                <div
                  key={image._id}
                  style={{ display: "flex", justifyContent: "center" }}
                  className="column  is-6-mobile is-4-tablet is-3-desktop   is-3-widescreen is-2-fullhd"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    className=" image is-128x128"
                  >
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={`${process.env.REACT_APP_PICTURE_URL}/${image.picture}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          )}
          {sponsors?.length !== 0 && (
            <div
              style={{
                marginTop: "2%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="columns is-centered is-multiline is-mobile is-tablet is-widescreen is-fullhd"
            >
              <h1 className={classes.subTitle}>Sponsors</h1>
              {sponsors?.map((image) => (
                <div
                  key={image.id}
                  style={{ display: "flex", justifyContent: "center" }}
                  className="column  is-6-mobile is-4-tablet is-3-desktop   is-3-widescreen is-2-fullhd"
                >
                  <figure className=" image is-128x128">
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={`${process.env.REACT_APP_PICTURE_URL}/${image.picture}`}
                    />
                  </figure>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Colab;
