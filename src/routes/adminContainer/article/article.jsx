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
import { Link, useRouteMatch } from "react-router-dom";
import { useFetchArticles } from "hooks/useFetchArticles";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
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

const Article = () => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  let data = useFetchArticles();
  console.log(data);

  const handleDeleteArticle = () => {};
  const handlePushArticle = () => {};
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Articles :</div>
      </div>
      <Link to={`${path}/NouvelArticle`}>
        <Button className={classes.btn} variant="contained" color="primary">
          <AddIcon />
          Ecrire un nouvel article
        </Button>
      </Link>
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <div className={classes.smvl} />
          <div className={classes.smallTitle}> Articles présents :</div>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.fontBold}>Index</TableCell>
                <TableCell className={classes.fontBold}>Nom</TableCell>
                <TableCell className={classes.fontBold}>description</TableCell>
                <TableCell className={classes.fontBold}>date</TableCell>
                <TableCell className={classes.fontBold}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((article, i) => {
                return (
                  <TableRow key={article._id}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {article.title}
                    </TableCell>
                    <TableCell align="right">
                      {article.shortDescription}
                    </TableCell>
                    <TableCell align="right">{article.date}</TableCell>
                    <TableCell align="right">
                      <ClearIcon
                        className={classes.icon}
                        fontSize="large"
                        color="secondary"
                      />
                      <SearchIcon
                        className={classes.icon}
                        fontSize="large"
                        color="primary"
                      />{" "}
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
export default Article;
