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

  btnHolder: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const NewArticle = () => {
  const classes = useStyles();
  const [input, setInput] = useState({
    title: "",
    shortDescription: "",
    categories: "",
    hashtags: "",
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

  const [status, setStatus] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [type, setType] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("shortDescription", input.shortDescription);
    formData.append("categories", input.categories);
    formData.append("hashtags", input.hashtags);
    formData.append("picture", formState.inputs.image.value);
    formData.append("description", JSON.stringify(contentState));
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/articles/`, formData)
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
        <div className={classes.title}> Nouvel article :</div>
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
              label="Titre de l'article"
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
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="Petite description"
              name="shortDescription"
              label="Petite description"
              variant="outlined"
              type="text"
              multiline
              rowsMax={2}
              className={classes.textField}
              onChange={handleChangeInput}
            />
            <Typography variant="caption" display="block" gutterBottom>
              *Serra affichée dans la page do forum, 2 lignes max.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              id="Categorie de l'article"
              name="categories"
              label="Categorie de l'article"
              variant="outlined"
              type="text"
              className={classes.textField}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="Tags"
              name="hashtags"
              label="Tags de l'article"
              variant="outlined"
              type="text"
              multiline
              rowsMax={4}
              className={classes.textField}
              onChange={handleChangeInput}
            />
            <Typography variant="caption" display="block" gutterBottom>
              *S'il y a plusieurs tags, il faudra les séparer avec une virgule.
            </Typography>
          </Grid>
        </Grid>
        <ImageUpload
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
        <Editor
          className={classes.editor}
          handlePastedText={() => false}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorStyle={{
            border: "1px solid #C0C0C0",
            padding: "10px",
            borderRadius: "2px",
            height: "300px",
            width: "100%",
          }}
          onContentStateChange={onContentStateChange}
        />{" "}
        <Typography variant="caption" display="block" gutterBottom>
          *Les icones importées depuis les postes Facebook ne sont pas affichées
          à l'intérieur de l'éditeur mais le seront dans l'article
        </Typography>
        <div className={classes.btnHolder}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Valider
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default NewArticle;
