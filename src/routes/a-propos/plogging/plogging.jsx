import React from "react";
import picture from "assets/pictures/g6.JPG";
const Plogging = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-variable is-1-tablet is-6-desktop is-6-widescreen is-8-fullhd">
            <div className="column is-6 ">
              <figure class="image">
                <img src={picture} />
              </figure>
            </div>
            <div className="column is-6">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Qu’est-ce que le Plogging?
              </h1>
              <p>
                Le concept du <strong>Plogging</strong> est apparu comme étant
                une <strong> activité organisée</strong>, en 2016 en Suède, et
                s’est étendu à d’autres pays vers 2018, et ce, suite à une prise
                de conscience grandissante quant aux{" "}
                <strong> dangers de la pollution </strong>
                notamment ceux du plastique sur l’environnement.
                <br />
                <br />
                Le terme <strong> Plogging </strong> vient de la contraction du
                mot anglais <strong>« jogging » </strong> et du verbe suédois{" "}
                <strong>« plocka up » </strong> qui signifie{" "}
                <strong> « ramasser »</strong>.
                <br />
                <br /> Le <strong> Plogging </strong> consiste donc à combiner
                <strong> l’activité physique </strong> à celle du{" "}
                <strong> nettoyage </strong>, autrement faire du sport (jogging)
                tout en ramassant les différents déchets sur le chemin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plogging;
