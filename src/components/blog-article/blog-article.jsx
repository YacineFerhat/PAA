import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 400,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginTop: "5%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 400,
  },
  button: {
    backgroundColor: "hsl(141, 53%, 53%)",
    marginTop: "5%",
    "&:hover": {
      backgroundColor: "hsl(130, 53%, 33%)",
      borderColor: "hsl(130, 53%, 33%)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "hsl(130, 53%, 33%)",
      borderColor: "hsl(130, 53%, 33%)",
    },
  },
}));

const BlogArticle = ({ data: { id, title, subtitle, picture, categorie } }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper elevation={3}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={picture}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography color="secondary" component="h5" variant="h5">
              #{categorie}
            </Typography>
            <Typography
              color="inherit"
              component="h4"
              variant="h4"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {subtitle}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Lire l'article
            </Button>
          </CardContent>
        </div>
      </Card>
    </Paper>
  );
};

export default BlogArticle;
