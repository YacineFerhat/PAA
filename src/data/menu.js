const Menu = [
  {
    id: 1,
    title: "A propos de nous",
    link: "/A-propos",
  },
  {
    id: 2,
    title: "Nos comités",
    link: "/comités",
    sub: [
      {
        id: 1,
        title: "Sport et bien être ",
        link: "/sport",
      },
      {
        id: 2,
        title: "Junior",
        link: "/junior",
      },
      {
        id: 3,
        title: "Eco-tourisme",
        link: "/eco-tourisme",
      },
      {
        id: 4,
        title: "Conférence",
        link: "/conférence",
      },
      {
        id: 5,
        title: "Réseaux sociaux",
        link: "/réseaux-sociaux",
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
    title: "Nos évenements ",
    link: "/Evenements",
  },
];

export default Menu;
