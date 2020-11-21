import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { useFetchGlobalInfo } from "hooks/useFetchGlobalInfo";
import Alert from "components/alert";
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
  btn: {
    width: 250,
  },

  paper: {
    padding: theme.spacing(2),
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textField: {
    marginBottom: "3%",
    maxWidth: 300,
  },
  smallTitle: {
    fontSize: "18px",
    fontWeight: "500",
  },
  smvl: {
    width: "5px",
    height: "25px",
    backgroundColor: "#8cc63f",
    marginRight: "5px",
  },
  listItem: {
    width: 200,
  },
  mbtn: {
    backgroundColor: "#4caf50",
    color: "white",
    width: 150,
    marginLeft: "2%",
    "&:hover": {
      backgroundColor: "#357a38",
    },
  },
  sbtn: {
    width: 150,
    marginLeft: "2%",
  },
  btnHolder: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "1%",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Info = () => {
  const classes = useStyles();
  const [toggleAddInfo, setToggleAddInfo] = useState(false);
  const handleToggleInfo = (type) => {
    if (type === "add") {
      setToggleAddInfo(true);
    }
  };

  const [input, setInput] = useState({
    participants: 0,
    trashCollected: 0,
    eventsDone: 0,
    treesPlanted: 0,
    childs: 0,
  });

  const handleChangeInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const [status, setStatus] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [type, setType] = useState("");
  const [reload, setReload] = useState(0);
  const data = useFetchGlobalInfo(reload);

  const handleSubmitData = (event) => {
    event.preventDefault();
    const infoObject = {
      participants: input.participants,
      trashCollected: input.trashCollected,
      eventsDone: input.eventsDone,
      treesPlanted: input.treesPlanted,
      childs: input.childs,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/infos/`, infoObject)
      .then((res) => {
        setStatus(res.status);
        setDisplayAlert(true);
        setReload(reload + 1);
        setType("Ajout");
      })
      .catch((error) => {
        setStatus(error.status);
        setDisplayAlert(true);
        setType("Ajout");
      });
    setToggleAddInfo(false);
  };

  const handleDeleteData = (idToDelete) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/infos/${idToDelete}`)
      .then((res) => {
        setStatus(res.status);
        setDisplayAlert(true);
        setReload(reload + 1);
        setType("Suppression");
      })
      .catch((error) => {
        setStatus(error.status);
        setDisplayAlert(true);
        setType("Suppression");
      });
  };

  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState({});
  const handleToggleUpdate = (data) => {
    setToggleUpdate(true);
    setDataToUpdate(data);
  };

  const handleChangeInputUpdate = (event) => {
    setDataToUpdate({
      ...dataToUpdate,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitUpdateData = (event) => {
    event.preventDefault();
    const infoObject = {
      participants: parseInt(dataToUpdate.participants),
      trashCollected: parseInt(dataToUpdate.trashCollected),
      eventsDone: parseInt(dataToUpdate.eventsDone),
      treesPlanted: parseInt(dataToUpdate.treesPlanted),
      childs: parseInt(dataToUpdate.childs),
    };
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/infos/${dataToUpdate._id}`,
        infoObject
      )
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
    setToggleUpdate(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Information générales :</div>
      </div>
      {!data?.length > 0 && (
        <Button
          onClick={() => handleToggleInfo("add")}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          <AddIcon />
          Ajouter des infos
        </Button>
      )}
      <Alert type={type} displayAlert={displayAlert} status={status} />
      {toggleAddInfo && (
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                id="nombre de participants"
                name="participants"
                label="Nombre de participants"
                variant="outlined"
                type="Number"
                className={classes.textField}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                name="trashCollected"
                id="trashCollected"
                type="Number"
                label="Nombre de déchéts collectés"
                variant="outlined"
                onChange={handleChangeInput}
                className={classes.textField}
              />{" "}
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                name="eventsDone"
                id="eventsDone"
                type="Number"
                label="Nombre d'événements"
                variant="outlined"
                onChange={handleChangeInput}
                className={classes.textField}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                className={classes.textField}
                name="treesPlanted"
                id="treesPlanted"
                type="Number"
                label="Nombre d'arbres plantés"
                variant="outlined"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                className={classes.textField}
                name="childs"
                id="childs"
                type="Number"
                label="Nombre d'énfants sensibilisés"
                variant="outlined"
                onChange={handleChangeInput}
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmitData}
            className={classes.btn}
            variant="contained"
            color="primary"
          >
            Enregistrer
          </Button>
        </Paper>
      )}
      {data?.length > 0 && (
        <Paper className={classes.paper}>
          <div className={classes.titleContainer}>
            <div className={classes.smvl} />
            <div className={classes.smallTitle}> Données actuelles :</div>
          </div>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} xs={12}>
              {data.map((info) => (
                <List
                  key={info._id}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <ListItem button>
                    <ListItemText
                      className={classes.listItem}
                      primary="Parcipants :"
                    />
                    <ListItemText primary={info.participants} />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      className={classes.listItem}
                      primary="Déchets Collectés :"
                    />
                    <ListItemText primary={info.trashCollected} />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      className={classes.listItem}
                      primary="Evénements :"
                    />
                    <ListItemText primary={info.eventsDone} />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      className={classes.listItem}
                      primary="Arbres plantés :"
                    />
                    <ListItemText primary={info.treesPlanted} />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      className={classes.listItem}
                      primary="Enfants sensibilisés :"
                    />
                    <ListItemText primary={info.childs} />
                  </ListItem>

                  <div className={classes.btnHolder}>
                    <Button
                      onClick={() => handleToggleUpdate(info)}
                      className={classes.mbtn}
                      variant="contained"
                    >
                      Modifier
                    </Button>
                    <Button
                      onClick={() => handleDeleteData(info._id)}
                      className={classes.sbtn}
                      variant="contained"
                      color="secondary"
                    >
                      Supprimer
                    </Button>
                  </div>
                </List>
              ))}
            </Grid>
            {toggleUpdate && (
              <Grid item lg={6} md={6} xs={12} className={classes.grid}>
                <TextField
                  id="nombre de participants"
                  name="participants"
                  label="Nombre de participants"
                  variant="outlined"
                  type="Number"
                  className={classes.textField}
                  onChange={handleChangeInputUpdate}
                  defaultValue={dataToUpdate.participants}
                />
                <TextField
                  defaultValue={dataToUpdate.trashCollected}
                  name="trashCollected"
                  id="trashCollected"
                  type="Number"
                  label="Nombre de déchéts collectés"
                  variant="outlined"
                  onChange={handleChangeInputUpdate}
                  className={classes.textField}
                />{" "}
                <TextField
                  name="eventsDone"
                  id="eventsDone"
                  type="Number"
                  label="Nombre d'événements"
                  variant="outlined"
                  onChange={handleChangeInputUpdate}
                  className={classes.textField}
                  defaultValue={dataToUpdate.eventsDone}
                />
                <TextField
                  className={classes.textField}
                  name="treesPlanted"
                  id="treesPlanted"
                  type="Number"
                  label="Nombre d'arbres plantés"
                  variant="outlined"
                  onChange={handleChangeInputUpdate}
                  defaultValue={dataToUpdate.treesPlanted}
                />
                <TextField
                  className={classes.textField}
                  name="childs"
                  id="childs"
                  type="Number"
                  defaultValue={dataToUpdate.childs}
                  label="Nombre d'énfants sensibilisés"
                  variant="outlined"
                  onChange={handleChangeInputUpdate}
                />
                <Button
                  onClick={handleSubmitUpdateData}
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  Enregistrer
                </Button>
              </Grid>
            )}
          </Grid>
        </Paper>
      )}
    </div>
  );
};
export default Info;
