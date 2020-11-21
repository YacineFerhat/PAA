import React, { useState } from "react";
import {
  Grid,
  Radio,
  FormControlLabel,
  Typography,
  RadioGroup,
  Button,
} from "@material-ui/core";
import Input from "components/input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from "utils/validators";
import { useForm } from "hooks/useForm";
import DoubleTitle from "components/double-title";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
  btn: {
    width: 150,
    color: "white",
    marginBottom: 50,
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 100%)",
    "&:hover": {
      opacity: 0.8,
    },
  },
  formControl: {
    padding: "0.15rem 0.25rem",
    margin: "1rem 0",
  },
}));
const Social = () => {
  const classes = useStyles();
  const [formState, inputHandler] = useForm(
    {
      nom: {
        value: "",
        isValid: false,
      },
      prenom: {
        value: "",
        isValid: false,
      },
      birth: {
        value: "",
        isValid: false,
      },
      adresse: {
        value: "",
        isValid: false,
      },
      mail: {
        value: "",
        isValid: false,
      },
      numero: {
        value: "",
        isValid: false,
      },
      etude: {
        value: "",
        isValid: false,
      },
      connaissance: {
        value: "",
        isValid: false,
      },
      motivation: {
        value: "",
        isValid: false,
      },
      experienceOuiSocial: {
        value: "",
        isValid: false,
      },
      skillsSocial: {
        value: "",
        isValid: false,
      },
      languesSocial: {
        value: "",
        isValid: false,
      },
      feedbackSocial: {
        value: "",
        isValid: false,
      },
      ideasSocial: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [time, setTime] = useState("");
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  const [experienceSocial, setExperienceSocial] = useState("");
  const handleChangeExperienceSocial = (event) => {
    setExperienceSocial(event.target.value);
  };

  const [socialUsedSocial, setSocialUsedSocial] = useState("");
  const handleChangeSocialUsedSocial = (event) => {
    setSocialUsedSocial(event.target.value);
  };

  const [followingSocial, setFollowingSocial] = useState("");
  const handleChangeFollowingSocial = (event) => {
    setFollowingSocial(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataObject = {
      nom: formState.inputs.nom.value,
      prenom: formState.inputs.prenom.value,
      birth: formState.inputs.birth.value,
      adresse: formState.inputs.adresse.value,
      mail: formState.inputs.mail.value,
      numero: formState.inputs.numero.value,
      etude: formState.inputs.etude.value,
      connaissance: formState.inputs.connaissance.value,
      motivation: formState.inputs.motivation.value,

      experienceOuiSocial: formState.inputs.experienceOuiSocial.value,
      skillsSocial: formState.inputs.skillsSocial.value,
      languesSocial: formState.inputs.languesSocial.value,
      feedbackSocial: formState.inputs.feedbackSocial.value,
      ideasSocial: formState.inputs.ideasSocial.value,

      socialUsedSocial: socialUsedSocial,
      experienceSocial: experienceSocial,
      followingSocial: followingSocial,
      time: time,
      comite: "Réseaux sociaux",
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/inscriptions/social`,
        dataObject
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            title="Réseaux sociaux"
            sub="Le comité réseaux sociaux est le comité responsable de la communication . 
            Le comité se charge de la gestion des réseaux sociaux : c'est la vitrine de l'association!
            Vous êtes intéressé ? Vous voulez l’intégrer ? Remplissez ce formulaire .
            Bonne chance à vous ."
          />
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="nom"
                element="input"
                type="text"
                label="Nom *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait introduisez un nom valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="prenom"
                element="input"
                type="text"
                label="Prénom *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait introduisez un prénom valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="birth"
                element="input"
                type="date"
                label="Date de naissance *"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="S'il vous plait introduisez une date valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="mail"
                element="input"
                type="text"
                label="Adresse email *"
                validators={
                  [VALIDATOR_REQUIRE()] && [VALIDATOR_EMAIL()] && [
                    VALIDATOR_MINLENGTH(10),
                  ]
                }
                errorText="S'il vous plait introduisez une adresse email valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="adresse"
                element="input"
                type="text"
                label="Adresse *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait introduisez une adresse valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="numero"
                element="input"
                type="number"
                label="Numero de téléphone"
                validators={
                  [VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(10)] && [
                    VALIDATOR_MAXLENGTH(10),
                  ]
                }
                errorText="S'il vous plait introduisez un numéro valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="etude"
                element="input"
                type="text"
                label="Niveau/Domaine d'étude *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(3)]}
                errorText="S'il vous plait introduisez un niveau/domaine valide."
                onInput={inputHandler}
              />{" "}
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="connaissance"
                element="input"
                type="text"
                label="Que savez-vous sur Plogging Association Algeria ? *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait introduisez des informations"
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="motivation"
                element="textarea"
                type="text"
                label="Quelle est votre motivation pour rejoindre ce comité ? *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait introduisez une motivation."
                onInput={inputHandler}
              />{" "}
            </Grid>
            <Grid item md={6} sm={12} xs={12} className={classes.formControl}>
              <Typography
                variant="h6"
                gutterBottom
                htmlFor="radio group knowledge"
              >
                Combien de temps pouvez-vous consacrer au comité ? * :
              </Typography>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={time}
                onChange={handleChangeTime}
              >
                <FormControlLabel
                  value="1h/jour"
                  control={<Radio />}
                  label="1h/jour"
                />
                <FormControlLabel
                  value="2h/jour"
                  control={<Radio />}
                  label="2h/jour"
                />
                <FormControlLabel
                  value="Une journée/semaine"
                  control={<Radio />}
                  label="Une journée/semaine"
                />
                <FormControlLabel
                  value="Le week-end"
                  control={<Radio />}
                  label="Le week-end"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12} className={classes.formControl}>
              <Typography
                variant="h6"
                gutterBottom
                htmlFor="radio group knowledge"
              >
                Avez vous déjà une expérience dans le domaine ? * :{" "}
              </Typography>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={experienceSocial}
                onChange={handleChangeExperienceSocial}
              >
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="Nom" control={<Radio />} label="Nom" />
              </RadioGroup>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="experienceOuiSocial"
                element="input"
                type="text"
                label="laquelle ?"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="S'il vous plait repmlissez le champ"
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="skillsSocial"
                element="input"
                type="text"
                label="Quelles sont vos compétences ? ( Maîtrise d'Applications / logiciels / Autres ) *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(10)]}
                errorText="S'il vous plait introduisez vos compétences."
                onInput={inputHandler}
              />{" "}
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="languesSocial"
                element="input"
                type="text"
                label="Quelles langues maitrisez vous ? *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait repmlissez le champ"
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>{" "}
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12} className={classes.formControl}>
              <Typography
                variant="h6"
                gutterBottom
                htmlFor="radio group knowledge"
              >
                Quel est le réseaux social que vous utilisez le plus ? *{" "}
              </Typography>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={socialUsedSocial}
                onChange={handleChangeSocialUsedSocial}
              >
                <FormControlLabel
                  value="Facebook"
                  control={<Radio />}
                  label="Facebook"
                />
                <FormControlLabel
                  value="Instagram"
                  control={<Radio />}
                  label="Instagram"
                />{" "}
                <FormControlLabel
                  value="Autre"
                  control={<Radio />}
                  label="Autre"
                />
              </RadioGroup>
            </Grid>
            <Grid item md={6} sm={12} xs={12} className={classes.formControl}>
              <Typography
                variant="h6"
                gutterBottom
                htmlFor="radio group knowledge"
              >
                Sur quelle plateforme nous suivez-vous ? *{" "}
              </Typography>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={followingSocial}
                onChange={handleChangeFollowingSocial}
              >
                <FormControlLabel
                  value="Facebook"
                  control={<Radio />}
                  label="Facebook"
                />
                <FormControlLabel
                  value="Instagram"
                  control={<Radio />}
                  label="Instagram"
                />{" "}
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="feedbackSocial"
                element="textarea"
                type="text"
                label="Que pensez vous du contenu facebook/ Instagram de l'Association ? *"
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(10)]}
                errorText="S'il vous plait remplissez le champ"
                onInput={inputHandler}
              />{" "}
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Input
                id="ideasSocial"
                element="texarea"
                type="text"
                label="Quelles sont les améliorations que vous pourriez apporter ? * "
                validators={[VALIDATOR_REQUIRE()] && [VALIDATOR_MINLENGTH(4)]}
                errorText="S'il vous plait remplissez le champ"
                onInput={inputHandler}
              />{" "}
            </Grid>
          </Grid>
          <div className={classes.btnHolder}>
            {formState.isValid &&
            socialUsedSocial !== "" &&
            followingSocial !== "" &&
            experienceSocial !== "" &&
            time !== "" ? (
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
        </div>
      </div>
    </section>
  );
};

export default Social;
