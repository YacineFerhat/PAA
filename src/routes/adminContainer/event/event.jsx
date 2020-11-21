import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { useFetchArticles } from "hooks/useFetchArticles";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
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
  paper: {
    padding: theme.spacing(2),
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  btn: {
    width: 300,
  },
  textField: {
    marginTop: "2%",
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
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Event = () => {
  const classes = useStyles();
  const [reload, setReload] = useState(0);
  let { path } = useRouteMatch();
  let datadata = useFetchArticles(reload);
  let history = useHistory();
  const handlePushArticle = (title) => {
    history.push(`/Articles/${title}`);
  };
  const [status, setStatus] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [type, setType] = useState("");
  const handleDeleteArticle = (idToDelete) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${idToDelete}`)
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
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Evènements :</div>
      </div>
      <Link to={`${path}/NouvelEvent`}>
        <Button className={classes.btn} variant="contained" color="primary">
          <AddIcon />
          Créer un nouvel évent
        </Button>
      </Link>
      <Alert type={type} displayAlert={displayAlert} status={status} />
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <div className={classes.smvl} />
          <div className={classes.smallTitle}> Events créés :</div>
        </div>
      </Paper>
    </div>
  );
};
export default Event;
