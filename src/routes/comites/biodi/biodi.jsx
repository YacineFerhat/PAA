import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import p1 from "assets/pictures/b2.jpg";
import p2 from "assets/pictures/b3.jpg";
import p3 from "assets/pictures/b4.jpg";
const useStyles = makeStyles({
  root: {
    fontFamily: "arial",
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

const Biodi = () => {
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
                  alt="Un membre PAA qui tient un peitt chien dans ses mains"
                />{" "}
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Comité Biodiversité
              </h1>
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                Nous avons créé ce comité intitulé <strong>Biodiversité</strong>{" "}
                pour répondre aux besoins de pas participants non spécialisés
                dans ce domaine. Ce comité exerce ses activités sur des espaces
                <strong>d'exploitation végétale</strong> (spontanné / introduite
                ) et <strong>animales</strong>.
                <br />
                <br />
                <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                  Il suit un programme <strong>saisonnier</strong> pour ce qui
                  est des <strong>reboisements</strong> et{" "}
                  <strong>mensuel</strong> pour le reste des activités afin de
                  pouvoir veiller à garder{" "}
                  <strong>l'équilibre environnemental</strong>.
                </p>
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
                Pour se faire, il compte a son programme deux types d’activités
                : <strong> Plantation </strong> et <strong>reboisement</strong>{" "}
                ( <strong>Septembre</strong> - <strong>Décembre</strong> )
                Activités bio diverses qui touchent le <strong>Vivant</strong>{" "}
                et <strong>l’écosystème</strong> ( céréaliculture, apiculture,
                culture maraîchère, techniques d’élevage des animaux
                domestiques, cultures d’intérieurs .. etc ).
              </p>
            </div>
            <div className="column is-6">
              <figure class="image is-square">
                <img
                  className={classes.image}
                  src={p2}
                  alt="une membre PAA qui tient 2 légumes dans sa main au milieu d'un champ"
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
                  alt="un membre PAA qui plante un arbre"
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
                Cet organe permet de{" "}
                <strong>réinsérer la culture agronomique</strong> et
                <strong>environnementale</strong> dans le quotidien des jeunes
                citoyens, de <strong>protéger</strong> le patrimoine algérien et
                aussi les <strong>orienter</strong> à un mode de vie plus sain.
                <br />
                <br />
                **Phrase d'incitation à rajouter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodi;

/*
 */
