import React, { useState } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import data from "data/carouselActivities";
const Activites = () => {
  const [index, setIndex] = useState(0);
  const handleIndex = (i) => {
    setIndex(i);
  };
  return (
    <section
      style={{
        fontFamily: "Comic Sans MS",
      }}
      className="hero is-fullheight"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-variable is-1-tablet is-6-desktop is-6-widescreen is-8-fullhd">
            <div className="column is-6">
              <h1 className="title is-4" style={{ marginTop: "14%" }}>
                Nos activités{" "}
              </h1>
              <br />
              <h1 className="subtitle is-6">
                PAA organise au moins un évènement par semaine, pour un total de
                4 par mois.
              </h1>
              <p>
                L'évenemnt change d'après le comité qui l'organise, parmi eux :
                <br />
                <br />
                <strong>Animation</strong> de débats & conférences sur la cause
                envioronnementale.
                <br />
                <br />
                <strong>Sensibilisation</strong> des enfants à l’écologie.
                <br />
                <br />
                <strong>Contribution</strong> à la protection des mers & Océans.
                <br />
                <br />
                <strong>Visite</strong> & <strong>nettoyage</strong> des sites
                historiques.
                <br />
                <br />
                <strong>Participation</strong> à la préservation de la
                biodiversté.
                <br />
                <br />
                <strong>Organisastion</strong> annuelle d'un marathon
                écologique.
                <br /> <br />
              </p>
            </div>
            <div className="column is-6">
              <Gallery
                index={index}
                onRequestChange={(i) => {
                  handleIndex(i);
                }}
              >
                {data.map((img) => (
                  <GalleryImage objectFit="cover" key={img.id} src={img.src} />
                ))}
              </Gallery>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activites;
