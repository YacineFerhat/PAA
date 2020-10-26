import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import p1 from "assets/pictures/c2.JPG";
import p2 from "assets/pictures/c3.JPG";
import p3 from "assets/pictures/c4.jpg";
const useStyles = makeStyles({
  root: {
    fontFamily: "Comic Sans MS",
  },
  figure: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 400,
    width: 400,
  },
});
const Conf = () => {
  const classes = useStyles();

  return (
    <section className={`hero ${classes.root}`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure class="image is-square">
                <img
                  className={classes.image}
                  src={p1}
                  alt="Débat au milieu d'un jardin"
                />
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Comité Conférence
              </h1>
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                Le comité conférence est né du désir de{" "}
                <strong>soutenir la sensibilisation écologique</strong> de
                masse, cet organe de l’association est en contact direct avec
                les établissements universitaires. Il se donne comme objectif
                <strong> d’organiser</strong> au moins une fois par semaine un
                programme des plus enrichissants pour les participants afin de
                <strong> répondre</strong> à tous leurs questionnements quant à
                la préservation de l’environnement.
              </p>
            </div>
          </div>
          <br />
          <div className="columns">
            <div className="column is-6">
              <p
                style={{
                  marginTop: "14%",
                  textIndent: "20px",
                  lineHeight: "35px",
                }}
              >
                Pour se faire, il compte à son programme des{" "}
                <strong>ateliers créatifs</strong>, des{" "}
                <strong>débats animés</strong>, des{" "}
                <strong>conférences thématisées</strong>, des{" "}
                <strong>intervenants qualifiés</strong> et autres, défendant
                évidemment, comme sujet principal les{" "}
                <strong>problématiques écologiques</strong>
                d’actualité.
              </p>
            </div>
            <div className="column is-6">
              <figure class="image is-square">
                <img
                  className={classes.image}
                  src={p2}
                  alt="Débat au milieu d'un jardin"
                />
              </figure>
            </div>
          </div>
          <br />

          <div className="columns">
            <div className="column is-6">
              <figure class="image is-square">
                <img
                  className={classes.image}
                  src={p3}
                  alt="Conférence faite par un membre de PAA"
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
                Le comité permet de{" "}
                <strong>communiquer les nouvelles environnementales</strong>
                en rapport avec la <strong>préservation</strong> et la
                <strong>protection</strong> du capital naturel qui n’est tout
                autre que notre <strong>chère planète</strong>, tant défendue
                par l’ensemble de l’association.
                <br />
                <br />
                Si défendre la cause environnementale, vous tient à cœur et que
                vous avez le sens du débat et des échanges, votre place est
                parmi nous ! rejoignez le comité conférence sans plus attendre !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conf;
