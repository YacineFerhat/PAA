import art from "assets/icones/art.png";
import conf from "assets/icones/conf.png";
import junior from "assets/icones/junior.png";
import photographie from "assets/icones/photographie.png";
import redac from "assets/icones/redac.png";
import relation from "assets/icones/relation.png";
import reseaux from "assets/icones/sport.png";
import sport from "assets/icones/sport.png";
import tourisme from "assets/icones/tourisme.png";
//A propos nos teams nos activités notre blog
const Data = [
  {
    id: 1,
    title: "A propos",
    link: "/Apropos",
    sub: [
      {
        id: 2,
        title: "Qu’est-ce que le Plogging?",
        link: "/Plogging",
      },
      {
        id: 1,
        title: "Qui sommes-nous?",
        link: "/QuiSommeNous",
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
        title: "Comités",
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
        id: 6,
        title: "Collaborateurs",
        link: "/Collaborateurs",
      },

      {
        id: 7,
        title: "Nous rejoindre",
        link: "/RejoignezNous",
      },
      {
        id: 8,
        title: "Contact",
        link: "/Contact",
      },
    ],
  },

  {
    id: 2,
    title: "Nos activités",
    link: "/Activités",
  },
  {
    id: 3,
    title: "Nos teams",
    link: "/Teams",
  },

  {
    id: 6,
    title: "Notre blog",
    link: "/Articles",
  },
];

export default Data;
