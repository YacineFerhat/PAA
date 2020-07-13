const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    outline: "none",
    fontFamily: "PT Sans, sans-serif",
  },
  aNavBar: {
    width: "100%",
  },
  aNav1: {
    width: "100%",
    height: "50px",
    backgroundColor: "rgb(0, 180, 137)",
    display: "flex",
    justifyContent: "space-between",
  },
  rightSide: {
    marginRight: "55px",
    display: "flex",
  },
  navMail: {
    height: "100%",
    border: "none",
    borderLeft: "solid rgba(88, 88, 88, 0.5) 0.5px",
    borderRight: "solid rgba(88, 88, 88, 0.5) 0.5px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingLeft: "15px",
    paddingRight: "15px",
    color: "white",
    fontSize: "1em",
    marginRight: "25px",
    marginLeft: "55px",
    fontFamily: `'PT Sans', sans-serif`,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover ": {
      backgroundColor: "rgba(17, 151, 120, 0.726)",
    },
  },
  mailIcon: {
    alignItems: "center",
  },
  icons: {
    display: "flex",
  },
  links: {
    border: "none",
    height: "100%",
    fontSize: "1.5em",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "8px",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.658)",
    },
  },
  aNav2: {
    width: "100%",
    height: "150px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  leftSide: {
    display: "flex",
  },
  rightSide: {
    display: "flex",
  },
  logo: {
    width: "150px",
  },
  navItemHolder: {},
  navItem: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "none",
    padding: "10px",
    fontSize: "1em",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));
