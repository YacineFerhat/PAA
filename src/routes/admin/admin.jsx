import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopBar from "components/topBarAdmin";
import MenuBar from "components/menuBarAdmin";
import AdminContainer from "routes/adminContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "103vh",
    width: "101%",
    backgroundColor: "#f3f6fa",
  },
}));

const Admin = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item lg={2} xl={1}>
        <MenuBar />
      </Grid>
      <Grid item lg={10} xl={11}>
        <TopBar />
        <AdminContainer />
      </Grid>
    </Grid>
  );
};

export default Admin;
