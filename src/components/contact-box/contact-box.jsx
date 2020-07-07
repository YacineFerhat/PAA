import React from "react";
import Paper from "@material-ui/core/Paper";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
    minWidth: 275,
  },
  iconTitle: {
    marginTop: "3%",
    color: "#4caf50",
    fontSize: "45px",
  },
  desc: {
    marginLeft: "10%",
    marginRight: "10%",
    height: 100,
  },
  typo: {
    wordWrap: "break-word",
    color: "#4caf50",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    color: "#4caf50",
    margin: "0% 20%",
  },
  links: {
    color: "#4caf50",
    "&:hover": {
      color: "#234915",
    },
  },

  icon: { fontSize: 34 },
});

const ContactBox = ({ data: { title, desc, data, sub } }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let socialMedia = title === "Email" ? false : true;
  console.log(data);
  return (
    <Paper elevation={3} className="has-text-centered">
      <Card className={classes.root}>
        <CardContent>
          {socialMedia ? (
            <RssFeedIcon className={classes.iconTitle} />
          ) : (
            <EmailIcon className={classes.iconTitle} />
          )}
          <Typography variant="h4" gutterBottom>
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
                <YouTubeIcon className={classes.icon} />
              </a>
              <a
                className={classes.links}
                href="https://www.instagram.com/plogging_association_algeria/?hl=fr"
                target="_blank"
              >
                <InstagramIcon className={classes.icon} />
              </a>
              <a
                className={classes.links}
                href="https://www.facebook.com/PloggingAssociationAlgeria/"
                target="_blank"
              >
                <FacebookIcon className={classes.icon} />
              </a>
            </div>
          ) : (
            <Typography className={classes.typo} variant="h5" gutterBottom>
              {data}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ContactBox;
