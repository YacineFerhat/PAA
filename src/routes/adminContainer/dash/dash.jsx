import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ImageUpload from "components/imageUpload";
import axios from "axios";
import Alert from "components/alert";
import EditIcon from "@material-ui/icons/Edit";
import { useFetchCountUsers } from "hooks/useFetchCountUsers";
import { useFetchCountTeams } from "hooks/useFetchCountTeams";
import { useFetchCountComitesOpen } from "hooks/useFetchCountComitesOpen";
import { useFetchCountColab } from "hooks/useFetchCountColab";
import { useFetchCountInscriptions } from "hooks/useFetchCountInscriptions";
import { useFetchCountEvent } from "hooks/useFetchCountEvent";
import { useFetchCountArticles } from "hooks/useFetchCountArticles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2% 2%",
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2%",
  },
  vl: {
    width: "5px",
    height: "30px",
    backgroundColor: "#8cc63f",
    marginRight: "5px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    justifyContent: "space-around",
    minHeight: 190,
  },
  text: {
    textAlign: "center",
  },
}));
const Dash = () => {
  const classes = useStyles();
  let nbrUsers = useFetchCountUsers();
  let nbrTeams = useFetchCountTeams();
  let nbrComitesOpen = useFetchCountComitesOpen();
  let nbrCollabs = useFetchCountColab();
  let nbrInscriptions = useFetchCountInscriptions();
  let nbrEvent = useFetchCountEvent();
  let nbrArticles = useFetchCountArticles();
  console.log(nbrEvent);
  //Nbr total de team.
  //Nbr total de colab.
  //Prochain event.
  //Nbr total d'inscriptions
  //Nbr total d'évent ayant des images.
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Tableau de bord :</div>
      </div>{" "}
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre d'articles
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrArticles}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre d'évenements
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrEvent === undefined ? 0 : nbrEvent}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre de teams
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrTeams}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre de collaborateurs
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrCollabs}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre d'utilisateurs
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre de comités ouverts
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrComitesOpen}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card className={classes.paper}>
            <CardContent>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Nombre de candidatures
              </Typography>
              <Typography variant="h4" className={classes.text}>
                {nbrInscriptions}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dash;
