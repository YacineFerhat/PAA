import React from "react";
import DoubleTitle from "components/double-title";
import Grid from "@material-ui/core/Grid";
import ContactBox from "components/contact-box";
import contact from "data/contact";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "5% 0%",
  },
  grid: {
    marginTop: "2%",
  },
});
const Contact = () => {
  const classes = useStyles();

  return (
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-main">
        <div className="container">
          <DoubleTitle
            title=" Contact"
            sub="Voulez-vous rentrer en contact avec nous? Rien de plus simple, choisissez le moyen que vous préferez"
          />

          <Grid className={classes.grid} justify="center" container spacing={3}>
            {contact.map((data) => (
              <Grid key={data.id} item xs={12} sm={6} md={4} xl={4}>
                <ContactBox data={data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Contact;
