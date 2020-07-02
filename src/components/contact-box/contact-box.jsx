import React from "react";
import Paper from "@material-ui/core/Paper";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "600px",
  },
  icon: {
    marginTop: "3%",
    color: "#4caf50",
    fontSize: "45px",
  },
  desc: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  typo: {},
});
const ContactBox = ({ data: { title, desc, data, sub } }) => {
  const classes = useStyles();

  return (
    <Paper className={`{classes.root} has-text-centered`} elevation={3}>
      {title === "Email" ? (
        <EmailIcon className={classes.icon} />
      ) : (
        <RssFeedIcon className={classes.icon} />
      )}
      <Typography className={classes.typo} variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography className={classes.desc} variant="h6" gutterBottom>
        {desc}
      </Typography>
    </Paper>
  );
};

export default ContactBox;
