import art from "assets/icones/art.png";
import conf from "assets/icones/conf.png";
import junior from "assets/icones/junior.png";
import photographie from "assets/icones/photographie.png";
import redac from "assets/icones/redac.png";
import relation from "assets/icones/relation.png";
import reseaux from "assets/icones/sport.png";
import sport from "assets/icones/sport.png";
import tourisme from "assets/icones/tourisme.png";

const Menu = [
  {
    id: 1,
    title: "PLOGGING ASSOCIATION ALGERIA",
    link: "/Apropos",
    sub: [
      {
        id: 1,
        title: "Qui sommes-nous?",
        link: "/QuiSommeNous",
      },
      {
        id: 2,
        title: "Qu’est-ce que le Plogging?",
        link: "/Plogging",
      },
      {
        id: 3,
        title: "Nos objectifs?",
        link: "/Objectifs",
      },
      {
        id: 4,
        title: "Nos activités?",
        link: "/Activités",
      },
      {
        id: 5,
        title: "Nous rejoindre",
        link: "/RejoignezNous",
      },
    ],
  },
  {
    id: 2,
    title: "Nos comités",
    link: "/Comités",
    sub: [
      {
        id: 1,
        title: "Sport et bien être ",
        link: "/Sport",
        icon: sport,
      },
      {
        id: 2,
        title: "Junior",
        link: "/Junior",
        icon: junior,
      },
      {
        id: 3,
        title: "Eco-tourisme",
        link: "/Eco-tourisme",
        icon: tourisme,
      },
      {
        id: 4,
        title: "Conférence",
        link: "/Conférence",
        icon: conf,
      },
      {
        id: 5,
        title: "Biodiversité",
        link: "/Biodiversité",
      },
    ],
  },
  {
    id: 3,
    title: "Nos teams",
    link: "/Teams",
  },
  {
    id: 4,
    title: "Collaborateurs",
    link: "/Collaborateurs",
  },
  {
    id: 5,
    title: "Nos évenements ",
    link: "/Evenements",
  },
  {
    id: 6,
    title: "Articles",
    link: "/Articles",
  },
  {
    id: 7,
    title: "Contacts",
    link: "/Contacts",
  },
];

export default Menu;
