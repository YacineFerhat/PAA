import React from "react";
import g5 from "assets/pictures/g5.jpg";
import g1 from "assets/pictures/g1.jpg";
const Objectifs = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-variable is-1-tablet is-6-desktop is-6-widescreen is-8-fullhd">
            <div className="column is-6 ">
              <figure class="image">
                <img src={g5} />
              </figure>
            </div>
            <div className="column is-6">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Nos objectifs
              </h1>
              <h1 className="subtitle is-6">
                Le plogging vise à promouvoir un mode de vie sain et respectueux
                de l'environnement grâce à:
              </h1>
              <p>
                <strong>Sensibiliser </strong> à la préservation de
                l’environnement à travers l’activité sportive l’ensemble des
                publics.
                <br /> <br />
                <strong>Promouvoir </strong> le tourisme local écoresponsable.
                <br /> <br />
                <strong>Impliquer </strong>les enfants à la responsabilité
                environnementale.
                <br /> <br />
                <strong>Echanger </strong> des connaissances pour défendre la
                cause environnementale.
                <br /> <br />
              </p>
            </div>
          </div>
          <div className="columns is-variable is-1-tablet is-6-desktop is-6-widescreen is-8-fullhd">
            <div className="column is-6">
              <p style={{ marginTop: "14%" }}>
                <strong>Stimuler </strong> l’intérêt pour le maintien de la
                biodiversité
                <br /> <br />
                <strong>Collaborer </strong> avec d’autres organisations &
                atteindre plus de personnes. <br /> <br />
                <strong>Améliorer </strong> les gestes du quotidien pour luter
                contre le plastique.
                <br /> <br />
                <strong>Valoriser </strong>le mode de vie sain respectueux de
                l’environnement. « ensemble on est plus fort »
              </p>
            </div>
            <div className="column is-6 ">
              <figure class="image">
                <img src={g1} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectifs;
