import React from "react";

const QuiSommesNous = () => {
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
                Qui sommes-nous?
              </h1>
              <p>
                PAA est une association environnementale algérienne, dont le
                principal objectif est{" "}
                <strong>la lutte contre la pollution</strong> sous toutes ses
                formes, et ce à travers l’organisation de différents événements
                veillant à la sensibilisation du grand public, la promotion du
                tourisme local, la préservation ainsi que la protection de
                l’environnement.
                <br />
                <br />
                L’association a été créée <strong> le 16 février 2019 </strong>
                par le jeune engagé
                <strong> Azzedine Aouali</strong>, qui gère et œuvre avec un
                groupe de jeunes algériens à concrétiser ce projet
                environnemental.
                <br />
                <br /> Le <strong> PLOGGING est le concept phare</strong> de
                notre association, nous sommes à présent <strong>actifs</strong>{" "}
                au niveau de <strong>9 wilayas</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuiSommesNous;
