import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography, Switch } from "@material-ui/core";
import axios from "axios";
import Alert from "components/alert";
import { useFetchComites } from "hooks/useFetchComites";
import { useHistory, useRouteMatch } from "react-router-dom";

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
  paperContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  paper: {
    padding: theme.spacing(2),
    flexBasis: "20%",
    width: 350,
    margin: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titlePaper: {
    height: 60,
    fontSize: "20px",
    fontWeight: "550",
  },
  btn: {
    marginTop: 15,
  },
}));

const Comite = () => {
  const classes = useStyles();
  const [reload, setReload] = useState(0);
  const data = useFetchComites(reload);
  const [status, setStatus] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [type, setType] = useState("");
  const handleEditComite = (comite) => {
    console.log(comite);
    const dataObject = {
      open: !comite.open,
    };
    axios
      .patch(`/api/recrutements/${comite._id}`, dataObject)
      .then((res) => {
        setStatus(res.status);
        setDisplayAlert(true);
        setReload(reload + 1);
        setType("Modification");
      })
      .catch((error) => {
        setStatus(error.status);
        setDisplayAlert(true);
        setType("Modification");
      });
  };

  let { path } = useRouteMatch();
  let history = useHistory();

  const handlePushHistory = (comite) => {
    history.push(`${path}/${comite.name}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Recrutement :</div>
      </div>
      <Alert type={type} displayAlert={displayAlert} status={status} />
      <div className={classes.paperContainer}>
        {data.map((comite) => (
          <Paper elevation={3} className={classes.paper} key={comite._id}>
            <div className={classes.titlePaper}>{comite.name}</div>
            <div>
              Etat :{" "}
              <Switch
                checked={comite.open}
                onChange={() => handleEditComite(comite)}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={() => handlePushHistory(comite)}
            >
              Consulter les demandes
            </Button>
          </Paper>
        ))}
      </div>
    </div>
  );
};
export default Comite;
