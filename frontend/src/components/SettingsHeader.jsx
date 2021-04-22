import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  },
  done: {
    textAlign: "center",
    color: "#FF5864",
  },
}));

function SettingsHeader({ title, backTo }) {
  const classes = useStyles();

  return (
    <Container className={classes.paper}>
      <CssBaseline />
      <Grid
        container
        justify="center"
        alignItems="center"
        className="max-width"
      >
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          <Typography component="h1" variant="h4">
            <Box textAlign="center">{title}</Box>
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Link to={backTo}>
            <Typography component="h2" variant="h5" className={classes.done}>
              Done
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SettingsHeader;
