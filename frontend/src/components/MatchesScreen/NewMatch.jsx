import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function NewMatch({ person }) {
  const classes = useStyles();

  return (
    <Box textAlign="center" mx={1}>
      <Avatar
        src={person.image}
        alt="new match"
        className={classes.iconLarge}
      />
      <Typography component="span" variant="h5">
        {person.first_name}
      </Typography>
    </Box>
  );
}

export default NewMatch;
