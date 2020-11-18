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
  Typography,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ImageUpload from "components/imageUpload";
import axios from "axios";
import Alert from "components/alert";
import { useFetchLogos } from "hooks/useFetchLogos";
import EditIcon from "@material-ui/icons/Edit";
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
    width: 325,
  },
  textField: {
    marginBottom: 25,
    width: 325,
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
  iconEdit: {
    color: "#357a38",
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
const Utilisateur = () => {
  const classes = useStyles();
  const [toggleAddTeam, setToggleAddTeam] = useState(false);
  const handleAddTeam = () => {
    setToggleAddTeam(true);
    setDisplayAlert(false);
  };

  const [input, setInput] = useState({
    userName: "",
    password: "",
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

  const handleEdit = async (event) => {};
  console.log(input);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      userName: input.userName,
      password: input.password,
      grade: "Admin",
    };

    axios
      .post("/api/users/", data)
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
        console.log(error);
      });
  };

  const handleDeleteData = (idToDelete) => {
    axios
      .delete(`/api/logos/${idToDelete}`)
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

  const data = useFetchLogos(reload);

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Utilisateurs :</div>
      </div>{" "}
      <Button
        onClick={handleAddTeam}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        <AddIcon />
        Ajouter un utilisateur
      </Button>
      <Alert type={type} displayAlert={displayAlert} status={status} />
      {toggleAddTeam && (
        <Paper className={classes.paper}>
          <TextField
            name="userName"
            label="nom d'utilisateur"
            variant="outlined"
            type="text"
            className={classes.textField}
            onChange={handleChangeInput}
          />
          <TextField
            name="password"
            label="mot de passe"
            variant="outlined"
            type="password"
            className={classes.textField}
            onChange={handleChangeInput}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Valider
          </Button>
        </Paper>
      )}
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <div className={classes.smvl} />
          <div className={classes.smallTitle}> Collaborateurs actuels :</div>
        </div>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.fontBold}>Index</TableCell>
                <TableCell className={classes.fontBold}>Lien</TableCell>
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
                      {team.link}
                    </TableCell>
                    <TableCell align="right">
                      <img
                        alt={team.link}
                        className={classes.image}
                        src={`http://localhost:4000/${team.picture}`}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <DeleteIcon
                        onClick={() => handleDeleteData(team._id)}
                        className={classes.icon}
                      />
                      <EditIcon
                        onClick={() => handleEdit(team)}
                        className={classes.iconEdit}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
export default Utilisateur;
