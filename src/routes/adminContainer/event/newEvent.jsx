import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, Paper, TextField } from "@material-ui/core";
import ImageUpload from "components/imageUpload";
import { useForm } from "hooks/useForm";
import axios from "axios";
import Alert from "components/alert";
import { convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

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
    width: "100%",
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
  editor: {
    marginTop: "2%",
  },
  btnHolder: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));
const NewEvent = () => {
  const classes = useStyles();
  const [input, setInput] = useState({
    title: "",
    location: "",
    link: "",
  });

  const handleChangeInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
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

  const [contentState, setContentState] = useState(convertFromRaw(content));

  const onContentStateChange = (contentState) => {
    setContentState(contentState);
  };
  const [selectedDate, handleDateChange] = useState(new Date());
  console.log(selectedDate);
  const [status, setStatus] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [type, setType] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("date", selectedDate);
    formData.append("done", false);
    formData.append("link", input.link);
    formData.append("picture", formState.inputs.image.value);
    formData.append("description", contentState.blocks);
    axios
      .post("/api/events/", formData)
      .then((res) => {
        setStatus(res.status);
        setDisplayAlert(true);
        setType("Ajout");
      })
      .catch((error) => {
        setStatus(error.status);
        setDisplayAlert(true);
        setType("Ajout");
      });
  };
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.vl} />
        <div className={classes.title}> Prochain évènement :</div>
      </div>
      <Alert type={type} displayAlert={displayAlert} status={status} />
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <div className={classes.smvl} />
          <div className={classes.smallTitle}> Informations générales :</div>
        </div>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              id="Titre de l'article"
              name="title"
              label="Titre de l'évènement"
              variant="outlined"
              type="text"
              multiline
              rowsMax={4}
              className={classes.textField}
              onChange={handleChangeInput}
            />
            <Typography variant="caption" display="block" gutterBottom>
              *Le titre doit être écrit en latin, les caractères arabes ne sont
              pas traités dans la recherche.
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              *Le titre doit être unique.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                className={classes.textField}
                label="Date de l'évènement"
                inputVariant="outlined"
                value={selectedDate}
                onChange={handleDateChange}
              />{" "}
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              id="link"
              name="link"
              label="Lien du formulaire"
              variant="outlined"
              type="text"
              multiline
              rowsMax={3}
              className={classes.textField}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="Tags"
              name="location"
              label="Localisation de l'évènement"
              variant="outlined"
              type="text"
              className={classes.textField}
              onChange={handleChangeInput}
            />
            <Typography variant="caption" display="block" gutterBottom>
              *S'il y a plusieurs tags, il faudra les séparer avec une virgule.
            </Typography>
          </Grid>
        </Grid>
        <ImageUpload
          label="affiche"
          id="image"
          style="small"
          onInput={inputHandler}
          errorText="Choissiez une image."
        />
        <Typography variant="caption" display="block" gutterBottom>
          *Taille maximum d'1Mo, sinon l'image ne passera pas.
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          *Utiliser une image carrée.
        </Typography>
        <hr />
        <div className={classes.titleContainer}>
          <div className={classes.smvl} />
          <div className={classes.smallTitle}> Description :</div>
        </div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName="toolbar-class"
          wrapperStyle={{ border: "1px solid gray", borderRadius: "5px" }}
          editorStyle={{ height: "300px", padding: "10px" }}
          className={classes.editor}
          handlePastedText={() => false}
          onContentStateChange={onContentStateChange}
        />{" "}
        <div className={classes.btnHolder}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Valider
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default NewEvent;
