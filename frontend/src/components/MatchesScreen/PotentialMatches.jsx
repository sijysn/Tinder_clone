import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

function PotentialMatches({ likes }) {
  const useStyles = makeStyles((theme) => ({
    iconLarge: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },

    tinderGoldIconBack: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      borderRadius: "50%",
      backgroundColor: "#e4c478",
    },
  }));

  const classes = useStyles();

  return (
    <Box textAlign="center" mx={1}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={`${classes.tinderGoldIconBack} tinder-gold`}
      >
        <Avatar
          src={likes[0].image}
          alt="new match"
          className={classes.iconLarge}
        />
      </Box>

      <Typography component="span" variant="h5">
        {likes.length === 1
          ? `${likes.length} Like`
          : likes.length > 1 && `${likes.length} Likes`}
      </Typography>
    </Box>
  );
}

export default PotentialMatches;
