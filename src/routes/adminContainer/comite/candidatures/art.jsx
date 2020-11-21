import React from "react";
import { useFetchArt } from "hooks/useFetchArt";
import { useFetchSport } from "hooks/useFetchSport";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
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
  table: {
    backgroundColor: "white",
  },
}));
const Art = () => {
  const rows = useFetchArt();
  const columns = [
    { headerName: "Action", width: 50 },
    { field: "nom", headerName: "Nom", width: 100 },
    { field: "prenom", headerName: "Prenom", width: 100 },
    { field: "birth", headerName: "DN", width: 125 },
    { field: "adresse", headerName: "adresse", width: 250 },
    { field: "mail", headerName: "Email", width: 250 },
    { field: "numero", headerName: "Numero", width: 150 },
    { field: "etude", headerName: "Etude", width: 150 },
    {
      field: "time",
      headerName: "Temps",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Date créa",
      width: 200,
    },
    { field: "connaissance", headerName: "connaissance", width: 250 },
    { field: "motivation", headerName: "Motivation", width: 250 },
    { field: "logicielArt", headerName: "Logiciels", width: 350 },
    {
      field: "workedBeforeArt",
      headerName: "Déjà travaillé?",
      width: 300,
    },
    {
      field: "workArt",
      headerName: "travaux",
      width: 500,
    },
  ];
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Art :</div>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          className={classes.table}
          loading={rows ? false : true}
          rows={rows}
          columns={columns}
          pageSize={10}
          scrollbarSize={5}
          showCellRightBorder
          showColumnRightBorder
        />
      </div>
    </section>
  );
};
export default Art;
