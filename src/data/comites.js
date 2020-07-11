import art from "assets/icones/art.png";
import conf from "assets/icones/conf.png";
import junior from "assets/icones/junior.png";
import photographie from "assets/icones/photographie.png";
import redac from "assets/icones/redac.png";
import relation from "assets/icones/relation.png";
import reseaux from "assets/icones/sport.png";
import sport from "assets/icones/sport.png";
import tourisme from "assets/icones/tourisme.png";
import j1 from "assets/pictures/j1.jpg";
import t1 from "assets/pictures/t1.jpg";
import s1 from "assets/pictures/s1.jpg";
const Media = [
  {
    id: 1,
    title: "Sport et bien être ",
    link: "/Sport",
    picture: s1,
    icon: sport,
    desc:
      "Organise des séances de sport diversifiés, accompagnées de séances de nettoyage des lieux à travers le Plogging",
  },
  {
    id: 2,
    title: "Junior",
    link: "/Junior",
    picture: j1,

    icon: junior,
    desc:
      "Oeuvre pour la sensibilisation des enfants, et ce via les différentes activités des jeux , des ateliers éducatifs",
  },
  {
    id: 3,
    title: "Eco-tourisme",
    picture: t1,

    link: "/Eco-tourisme",
    icon: tourisme,
    desc:
      "Promouvoir l’éco-tourisme en Algérie et participer à sa manière à la préservation de ces sites visités.",
  },
  {
    id: 4,
    title: "Conférence",
    picture: "",

    link: "/Conférence",
    icon: conf,
    desc:
      "Prévoit des tables rondes, ciné-débat, conférences et workshop ,traitant différentes problématiques  environnementales",
  },
  {
    id: 5,
    title: "Biodiversité",
    picture: "",

    link: "/Biodiversité",
    desc: "Description à rajouter",
  },
];

export default Media;
