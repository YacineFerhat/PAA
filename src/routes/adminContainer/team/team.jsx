import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { useForm } from "hooks/useForm";
import ImageUpload from "components/imageUpload";
import axios from "axios";
import Alert from "components/alert";
import { useFetchTeams } from "hooks/useFetchTeams";
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
    alignItems: "flex-start",
    justifyContent: "center",
  },
  btn: {
    width: 250,
  },
  textField: {
    marginTop: "2%",
    width: "100%",
    marginBottom: "2%",
  },
  smallTitle: {
    fontSize: "18px",
    fontWeight: "500",
  },
  smvl: {
    width: "3px",
    height: "25px",
    backgroundColor: "#8cc63f",
    marginRight: "5px",
  },
  icon: {
    color: "#f44336",
    fontSize: "35px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    height: 150,
    width: 150,
  },
}));
const Team = () => {
  const classes = useStyles();
  const [toggleAddTeam, setToggleAddTeam] = useState(false);
  const handleAddTeam = () => {
    setToggleAddTeam(true);
    setDisplayAlert(false);
  };

  const [formState, inputHandler] = useForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );
  const [input, setInput] = useState({
    name: "",
    description: "",
    adherant: 0,
    date: "",
  });

  const handleChangeInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  console.log(input);

  const [status, setStatus] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [type, setType] = useState("");
  const [reload, setReload] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("adherant", input.adherant);
    formData.append("date", input.date);
    formData.append("picture", formState.inputs.image.value);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/teams/`, formData)
      .then((res) => {
        setStatus(res.status);
        setDisplayAlert(true);
        setReload(reload + 1);
        setType("Ajout");
        setToggleAddTeam(false);
      })
      .catch((error) => {
        setStatus(error.status);
        setDisplayAlert(true);
        setType("Ajout");
      });
  };

  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const handleOpen = (value) => {
    setIdToDelete(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteData = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/teams/${idToDelete}`)
      .then((res) => {
        setStatus(res.status);
        setDisplayAlert(true);
        setReload(reload + 1);
        setType("Suppression");
        setOpen(false);
      })
      .catch((error) => {
        setStatus(error.status);
        setDisplayAlert(true);
        setType("Suppression");
        setOpen(false);
      });
  };

  const data = useFetchTeams(reload);
  console.log(data);
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Teams :</div>
      </div>{" "}
      <Button
        onClick={handleAddTeam}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        <AddIcon />
        Ajouter une team
      </Button>
      <Alert type={type} displayAlert={displayAlert} status={status} />
      {toggleAddTeam && (
        <Paper className={classes.paper}>
          <ImageUpload
            id="image"
            style="small"
            onInput={inputHandler}
            errorText="Choissiez une image."
          />
          <TextField
            id="team name"
            name="name"
            label="Nom de la team"
            variant="outlined"
            type="text"
            className={classes.textField}
            onChange={handleChangeInput}
          />
          <TextField
            id="team name"
            name="description"
            label="Description de la team"
            multiline
            className={classes.textField}
            rows={4}
            variant="outlined"
            onChange={handleChangeInput}
          />
          <TextField
            id="team name"
            name="adherant"
            label="Nombre d'adhérents"
            variant="outlined"
            type="Number"
            className={classes.textField}
            onChange={handleChangeInput}
          />
          <TextField
            id="date de creation"
            name="date"
            label="Date de création"
            type="date"
            onChange={handleChangeInput}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Valider
          </Button>
        </Paper>
      )}
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <div className={classes.smvl} />
          <div className={classes.smallTitle}> Teams actuelles :</div>
        </div>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.fontBold}>Index</TableCell>
                <TableCell className={classes.fontBold}>Nom</TableCell>
                <TableCell className={classes.fontBold}>Logo</TableCell>
                <TableCell className={classes.fontBold}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((team, i) => {
                return (
                  <TableRow key={team._id}>
                    <TableCell component="th" scope="row">
                      {i}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {team.name}
                    </TableCell>
                    <TableCell align="right">
                      <img
                        className={classes.image}
                        src={`${process.env.REACT_APP_PICTURE_URL}/${team.picture}`}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <DeleteIcon
                        onClick={() => handleOpen(team._id)}
                        className={classes.icon}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">
          Etes vous sur de vouloir supprimer?
          <Button onClick={handleDeleteData} color="secondary">
            Oui
          </Button>
          <Button onClick={handleClose} color="primary">
            Non
          </Button>
        </DialogTitle>
      </Dialog>
    </div>
  );
};
export default Team;
