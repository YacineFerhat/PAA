import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Paper,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    minWidth: 300,
  },
  card: {
    height: 350,
  },
  media: {
    height: 250,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontFamily: "arial",
    fontSize: "24px",
    color: "#1d7b63",
  },

  desc: {
    fontFamily: "arial",
    fontSize: "16px",
    color: "black",
  },
  link: {
    fontFamily: "arial",
    fontSize: "14px",
    color: "blue",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    border: "1px solid white",
  },
}));

const MediaCard = ({
  data: { adherant, name, description, date, picture },
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper className={classes.root} elevation={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} title={name}>
            <img
              className={classes.image}
              src={`${process.env.REACT_APP_PICTURE_URL}/${picture}`}
            />
          </CardMedia>
          <CardContent>
            <Typography
              className={classes.title}
              align="center"
              gutterBottom
              paragraph
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              className={classes.link}
              variant="button"
              color="textSecondary"
              component="p"
              onClick={handleOpen}
            >
              en savoir plus
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              className={classes.title}
              align="center"
              gutterBottom
              paragraph
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography align="center" paragraph variant="subtitle1">
              {description}
            </Typography>
            <Typography align="start" paragraph variant="body2" component="h4">
              Créé le {date}
            </Typography>

            <Typography align="start" paragraph variant="body2" component="h4">
              Compte à son actif {adherant} membres
            </Typography>
          </div>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default MediaCard;
