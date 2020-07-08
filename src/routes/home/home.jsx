import React from "react";
import review from "data/review";
import ReviewBox from "components/review-box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          La video d'intro viendra ici et jouera en fond d'écran Un text sera
          aussi affiché par dessus
        </div>
      </section>
      <div className="hero is-fullwidth">
        <div className="container has-text-centered">
          <Typography color="textPrimary" variant="h3" gutterBottom>
            Plogging en chiffres !
          </Typography>
        </div>
        <Grid
          direction="row"
          justify="space-evenly"
          alignItems="center"
          container
          spacing={3}
        >
          {review.map((data) => (
            <Grid key={data.id} item xs={6} sm={6} md={4} lg={2} xl={2}>
              <ReviewBox className="column is-2" data={data} />
            </Grid>
          ))}{" "}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
