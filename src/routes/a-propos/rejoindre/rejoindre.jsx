import React from "react";
import DoubleTitle from "components/double-title";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFetchRecrutementOpen } from "hooks/useFetchRecrutementOpen";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    fontFamily: "Autolinker",
    padding: "0% 2%",
  },
  paperContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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

  subTitleClosed: {
    marginTop: 20,
    color: "#ba000d",
    fontSize: "25px",
    fontWeight: 600,
  },
  subTitle: {
    marginTop: 20,
    color: "#023302",
    fontSize: "25px",
    fontWeight: 600,
  },
  titlePaper: {
    fontSize: "22px",
    color: "#023302",
    height: 70,
    textAlign: "center",
  },
  btn: {
    color: "white",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 100%)",
  },
}));
const Rejoindre = () => {
  let comites = useFetchRecrutementOpen();
  console.log(comites);
  const classes = useStyles();

  let { path } = useRouteMatch();
  let history = useHistory();
  const handlePushHistory = (comite) => {
    history.push(`${path}/${comite.name}`);
  };
  return (
    <section className={`hero ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            title=" Renjoigner nous !"
            sub="Envie de faire partie de PAA? Rien de plus simple, remplissez le formulaire du comité que vous voulez rejoindre."
          />
          {comites.length === 0 ? (
            <div className={classes.subTitleClosed}>
              {" "}
              Désolé tout les recrutements sont fermés.
            </div>
          ) : (
            <section>
              <div className={classes.subTitle}>Comités qui recrutent : </div>
              <div className={classes.paperContainer}>
                {comites?.map((comite) => (
                  <Paper
                    elevation={3}
                    className={classes.paper}
                    key={comite._id}
                  >
                    <div className={classes.titlePaper}>{comite.name}</div>

                    <Button
                      variant="contained"
                      className={classes.btn}
                      onClick={() => handlePushHistory(comite)}
                    >
                      Postuler
                    </Button>
                  </Paper>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Rejoindre;
