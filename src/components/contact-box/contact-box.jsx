import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import email from "assets/infoBox/email.png";
import fb from "assets/infoBox/fb.png";
import insta from "assets/infoBox/insta.png";
import yb from "assets/infoBox/yb.png";
import leave from "assets/infoBox/leave.png";
import leaves from "assets/infoBox/leaves.png";
import RS from "assets/infoBox/RS.png";
const useStyles = makeStyles({
  paper: {
    borderRadius: "10px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
    minWidth: 275,
    position: "relative",
    padding: "10% 5% 5% 5%",
  },
  iconTitle: {
    marginTop: "3%",
    height: 75,
    width: 75,
  },
  desc: {
    marginLeft: "10%",
    marginRight: "10%",
    height: 100,
    fontFamily: "arial",
  },
  typo: {
    wordWrap: "break-word",
    color: "#1d7b63",
    fontFamily: "arial",
    fontSize: "12px",
  },
  "@media (min-width: 1450px)": {
    typo: {
      fontSize: "13px",
    },
  },
  "@media (min-width: 1600px)": {
    typo: {
      fontSize: "15px",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontFamily: "arial",
    color: "#1d7b63",
  },
  pos: {
    marginBottom: 12,
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    color: "",
    margin: "0% 20%",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#1d7b63",
    "&:hover": {
      opacity: 0.8,
    },
  },

  icon: { fontSize: 34 },
  leaves: {
    position: "absolute",
    top: -2,
    left: -15,
    height: 150,
    width: 175,
    zIndex: 2,
  },
  leave: {
    position: "absolute",
    height: 125,
    width: 150,
    zIndex: 2,
    bottom: -8,
    right: -8,
  },
});

const ContactBox = ({ data: { title, desc, data, sub } }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let socialMedia = title === "Email" ? false : true;
  return (
    <Paper elevation={3} className={`has-text-centered ${classes.paper}`}>
      <div className={classes.root}>
        <img alt="leaves picture" src={leaves} className={classes.leaves} />
        <img alt="leave picture" src={leave} className={classes.leave} />
        <div>
          {socialMedia ? (
            <img src={RS} alt="RS picture" className={classes.iconTitle} />
          ) : (
            <img
              alt="email picture"
              src={email}
              className={classes.iconTitle}
            />
          )}
          <Typography className={classes.title} variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.desc} variant="h6" gutterBottom>
            {desc}
          </Typography>
          {socialMedia ? (
            <div className={`${classes.icons} has-text-centered`}>
              <a
                className={classes.links}
                href="https://www.youtube.com/channel/UC9NDD6jwR0GdiJUodVdQesA*/"
                target="_blank"
              >
                <img alt="YT picture" className={classes.icon} src={yb} />
              </a>
              <a
                className={classes.links}
                href="https://www.instagram.com/plogging_association_algeria/?hl=fr"
                target="_blank"
              >
                <img alt="insta picture" className={classes.icon} src={insta} />
              </a>
              <a
                className={classes.links}
                href="https://www.facebook.com/PloggingAssociationAlgeria/"
                target="_blank"
              >
                <img alt="fb  picture" className={classes.icon} src={fb} />
              </a>
            </div>
          ) : (
            <Typography className={classes.typo} gutterBottom>
              {data}
            </Typography>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default ContactBox;
