import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  figure: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 450,
    width: 450,
  },
});

const Tourisme = () => {
  const classes = useStyles();

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure className={classes.figure}>
                <img
                  className={classes.image}
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Comité Eco-tourisme
              </h1>
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                En mettant en place le comité éco-tourisme, PAA a la volonté de{" "}
                <strong>promouvoir le tourisme local algérien</strong>, sans
                écarter son objectif principal{" "}
                <strong>d’ordre écologique</strong>. De ce fait, le comité
                organise à une fréquence d’au moins une fois par semaine une
                <strong> sortie</strong>, au programme riche et diversifié.
              </p>
            </div>
          </div>
          <br />
          <div className="columns">
            <div className="column">
              <p
                style={{
                  marginTop: "14%",
                  textIndent: "20px",
                  lineHeight: "35px",
                }}
              >
                Visites des <strong>sites historiques</strong>, de divers{" "}
                <strong>musés</strong>, de <strong>paysages naturels</strong> …
                sont alors proposées aux adhérents, le plus souvent accompagnés
                par des guides expérimentés pour mettre en avant la{" "}
                <strong>richesse</strong> de la <strong>culture</strong> et de
                <strong> l’histoire algérienne</strong>. De plus, tous les lieux
                parcourus seront à la fin des visites <strong>nettoyés</strong>{" "}
                en pratiquant notre activité habituelle le{" "}
                <strong>PLOGGING</strong>.
              </p>
              <br />
              <br />
            </div>
            <div className="column is-6">
              <figure className={classes.figure}>
                <img
                  className={classes.image}
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
            </div>
          </div>
          <br />

          <div className="columns">
            <div className="column is-6">
              <figure className={classes.figure}>
                <img
                  className={classes.image}
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
            </div>
            <div className="column">
              <p
                style={{
                  textIndent: "20px",
                  lineHeight: "35px",
                  marginTop: "14%",
                }}
              >
                Le comité éco-tourisme veille à la{" "}
                <strong>sensibilisation</strong> du grand public à la cause
                <strong> environnementale</strong> tout en pratiquant le
                <strong> tourisme local</strong>, en proposant des destinations
                <strong> inédites</strong> et des programmes{" "}
                <strong>riches</strong> à chaque nouvelle sortie, et cela grâce
                à l’équipe motivée et engagée qui le compose.
                <br />
                <br />
                Si vous êtes passionné de tourisme, armée de volonté et
                d’initiatives innovantes, votre place est parmi nous !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tourisme;
