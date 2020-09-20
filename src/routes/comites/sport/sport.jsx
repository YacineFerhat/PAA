import React from "react";
import s2 from "assets/pictures/s2.jpg";
import s3 from "assets/pictures/s3.jpg";
import s4 from "assets/pictures/s4.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "6% 10% 0% 10%",
    backgroundColor: "white",
  },
});
const Sport = () => {
  const classes = useStyles();

  return (
    <section className={`hero is-fullwidth ${classes.root}`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure class="image is-square">
                <img src={s3} />
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Comité Sport et bien être :
              </h1>
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                Créé par Plogging Association Algeria, le comité sport est bien
                être est un des <strong>organes</strong> de l’association, qui
                combine <strong>l’activité sportive</strong> et la
                <strong> responsabilité environnementale</strong> dans le cadre
                du PLOGGING, et ce en organisant tout au long de l’année des
                activités sportives et physiques diversifiées afin de proposer
                des programmes adaptés aux capacités, aux besoins ainsi qu’au
                bien être des différents participants.
              </p>
              <br />
              <br />
              <p style={{ textIndent: "20px", lineHeight: "35px" }}>
                <strong>Footing</strong>, <strong>Ploggathon</strong>,{" "}
                <strong>Bootcamp </strong>
                et autre, ces derniers sont toujours accompagnés de séances de
                <strong> nettoyage </strong> des lieux ou ce que nous appelons
                communément les <strong> séances de PLOGGING</strong>, le but
                étant de sensibiliser un maximum de monde à la cause
                environnementale, le comité œuvre à l’atteindre à travers le
                sport.
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
                Depuis sa création, le comité ne cesse de{" "}
                <strong>recruter</strong> de nouveaux membres et volontaires,
                passionnés par le sport et conscients de l’importance{" "}
                <strong>d’agir </strong>
                pour protéger l’environnement, les membres{" "}
                <strong>veillent </strong> à l’organisation et à la réussite de
                chaque événement du comité,{" "}
                <strong>
                  « Un esprit sain dans un corps sain sur une planète saine »
                </strong>{" "}
                telle est la devise qui les relient.
                <br />
                <br />
                Si vous partagez cette devise, le comité sport et bien être est
                fait pour vous, rejoignez-nous vite !
              </p>
              <br />
              <br />
            </div>
            <div className="column is-6">
              <figure class="image is-square">
                <img src={s2} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sport;
