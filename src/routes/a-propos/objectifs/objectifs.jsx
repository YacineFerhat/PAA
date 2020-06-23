import React from "react";

const Objectifs = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-variable is-1-tablet is-6-desktop is-6-widescreen is-8-fullhd">
            <div className="column is-6 ">
              <figure class="image">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
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
                <strong>Combiner </strong> la pratique de l’activité sportive et
                la préservation de l’environnement.
                <br /> <br />
                <strong>Organiser </strong> des actions collectives de{" "}
                <strong>nettoyage</strong>
                au niveau des sites naturels, des espaces urbains ou même à
                valeur patrimoniale.
                <br />
                <br />
                <strong>Sensibiliser </strong> l’ensemble des publics,{" "}
                <strong>informer </strong> et <strong>promouvoir </strong> des
                gestes simples à adopter au quotidien pour un comportement plus
                éco-responsable.
                <br />
                <br />
                <strong>Créer </strong>, <strong> élaborer</strong> et{" "}
                <strong>mettre</strong> en place des projets environnementaux
                avec d’autres associations et organisations : par ce que nous
                croyons que <strong> « ensemble on est plus fort »</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectifs;
