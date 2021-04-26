import React from "react";

import Grid from "@material-ui/core/Grid";

import Like from "./Like";

function LikesList({ likes }) {
  return (
    <Grid container spacing={1} justify="space-evenly" className="max-width">
      {likes.length >= 1 && (
        <Grid item xs={6}>
          <Like image={likes[0].image}></Like>
        </Grid>
      )}

      {likes.length >= 1 && (
        <Grid item xs={6}>
          {likes.length >= 2 && <Like image={likes[1].image}></Like>}
        </Grid>
      )}

      {likes.length >= 3 && (
        <Grid item xs={6}>
          <Like image={likes[2].image}></Like>
        </Grid>
      )}

      {likes.length >= 3 && (
        <Grid item xs={6}>
          {likes.length >= 4 && <Like image={likes[3].image}></Like>}
        </Grid>
      )}

      {likes.length >= 5 && (
        <Grid item xs={6}>
          <Like image={likes[4].image}></Like>
        </Grid>
      )}

      {likes.length >= 5 && (
        <Grid item xs={6}>
          {likes.length >= 6 && <Like image={likes[5].image}></Like>}
        </Grid>
      )}
    </Grid>
  );
}

export default LikesList;
