import React from "react";
import j2 from "assets/pictures/j2.jpg";
import j3 from "assets/pictures/j3.jpg";
import j4 from "assets/pictures/j4.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { fontFamily: "Comic Sans MS" },
});

const Junior = () => {
  const classes = useStyles();
  return (
    <section className={`hero ${classes.root}`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure class="image is-square">
                <img src={j2} />
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Comité Junior
              </h1>
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                Dédié uniquement aux <strong>enfants </strong>, le comité Junior
                sous son initiative baptisée <strong>« NWA3I WLIDI »</strong> ou
                autrement <strong>« JE SENSIBILISE MON ENFANT »</strong>, a pour
                principal but la <strong>sensibilisation</strong> des enfants à
                l’importance de la{" "}
                <strong>protection de l’environnement</strong>.
              </p>
              <br />
              <br />
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                Conscient de <strong>l’importance</strong> du rôle de l’enfant
                d’aujourd’hui sur l’environnement demain, l’équipe œuvre à la
                sensibilisation à travers différentes activités{" "}
                <strong>écologiques</strong>, <strong>ploggging</strong>, des
                <strong> jeux</strong> et <strong>ateliers éducatifs</strong>{" "}
                initiant l’enfant au tri sélectif, au recyclage ou tout
                simplement aux petits gestes écolos à adopter au quotidien..
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
                Depuis sa création, le comité veille à diversifier ses activités
                à destination des enfants, et ce en effectuant des
                <strong> collaborations </strong> avec d’autres parties
                engagées, des <strong> campagnes de sensibilisation</strong>,{" "}
                <strong>plantation </strong>
                et <strong> randonnés</strong> en collaboration avec la
                direction des forêts, des événements avec un club d’équestre
                dédié aux enfants autistes, ainsi qu’un événement au niveau de
                l’orphelinat avec la participation d’une docteur vétérinaire
                pour la sensibilisation à la pollution et la cause animale
                également .
              </p>
              <br />
              <br />
            </div>
            <div className="column is-6">
              <figure className="image is-square">
                <img src={j3} />
              </figure>
            </div>
          </div>
          <br />

          <div className="columns">
            <div className="column is-6">
              <figure class="image is-square">
                <img src={j4} />
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
                Le comité compte à présent environ{" "}
                <strong>200 enfants sensibiliséss </strong>, toutes catégorie
                confondues, et ambitionne toucher davantage d’enfants en
                élargissant le champ d’action des prochains événements.
                <br />
                <br />
                <strong>L’enfant d’aujourd’hui est l’adulte de demain </strong>,
                si nous arrivons à inclure les bonnes valeurs d’un citoyen
                éco-responsable, nous aurons tout gagné, telle est l’ambition du
                comité.
                <br />
                <br />
                Si vous êtes dynamique, aimant le travail d’équipe et le travail
                avec les enfants, vous n’avez qu’à nous rejoindre !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Junior;
