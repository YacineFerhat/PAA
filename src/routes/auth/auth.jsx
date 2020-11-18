import React, { useContext, useState } from "react";
import { useForm } from "hooks/useForm";
import { AuthContext } from "context/authContext";
import { makeStyles } from "@material-ui/core/styles";
import DoubleTitle from "components/double-title";
import { Paper, Button, Typography } from "@material-ui/core";
import Input from "components/input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "utils/validators";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    fontFamily: "Autolinker",
    padding: "0% 2%",
  },

  btnHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    color: "white",
    margin: "3% 5%",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 100%)",
    "&:hover": {
      opacity: 0.8,
    },
  },
  paper: {
    margin: "5% 10%",
    padding: "3%",
  },
}));

const Auth = () => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      userName: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const classes = useStyles();
  let history = useHistory();
  const [errorMsg, setErrorMsg] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMsg(false);
    const dataObject = {
      userName: formState.inputs.userName.value,
      password: formState.inputs.password.value,
    };
    axios
      .post("/api/users/login", dataObject)
      .then((res) => {
        auth.login(res.data.userId, res.data.token, res.data.grade);
        history.push("/administration");
      })
      .catch((error) => {
        setErrorMsg(true);
      });
  };
  return (
    <section className={`hero ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          {" "}
          <DoubleTitle title="Authentification" />
          <Paper className={classes.paper} elevation={3}>
            {errorMsg && (
              <Typography color="secondary" variant="h6" gutterBottom>
                Veuillez vérifier vos identifiants
              </Typography>
            )}
            <Input
              id="userName"
              element="input"
              type="text"
              label="Nom d'utilisateur *"
              validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
              errorText="S'il vous plait introduisez un identifiant"
              onInput={inputHandler}
            />{" "}
            <Input
              id="password"
              element="input"
              type="password"
              label="Mot de pase *"
              validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
              errorText="S'il vous introduisez votre mot de passe."
              onInput={inputHandler}
            />{" "}
            <div className={classes.btnHolder}>
              {formState.isValid ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  className={classes.btn}
                >
                  Valider
                </Button>
              ) : (
                <Button variant="contained" disabled className={classes.btn}>
                  Valider
                </Button>
              )}
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default Auth;
