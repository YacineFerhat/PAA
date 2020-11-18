import React from "react";
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
const Sport = () => {
  const rows = useFetchSport();
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
    { field: "sportiveSport", headerName: "Sportif(ve)", width: 100 },
    {
      field: "sportPratiqueSport",
      headerName: "Pratique",
      width: 200,
    },
    {
      field: "interetSport",
      headerName: "Intérét",
      width: 500,
    },
    {
      field: "lienSport",
      headerName: "lienSport",
      width: 500,
    },
  ];
  const classes = useStyles();
  console.log(rows);
  return (
    <section className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Sport :</div>
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
export default Sport;

/*
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },*/

/*
nom: "Ferhat"
prenom: "Yacine"
birth: "1997-02-18"
adresse: "06 rue l'arbie ben m'hidi rouiba"
mail: "yacine.frhat@gmail.com"
numero: 558798023
etude: "ing info"
connaissance: "je ne fais que tester"
motivation: "Toujours un test "
sportiveSport: "Oui"
sportPratiqueSport: "Crossfit "
interetSport: "ce n'est qu'un test"
lienSport: "toujours un test "
time: "Le week-end"
comite: "Sport"
createdAt: "2020-11-02T21:37:03.756Z"
updatedAt: "20*/
