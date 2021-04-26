import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

function ProfileIcon({ user, age }) {
  const useStyles = makeStyles((theme) => ({
    profileIcon: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      boxShadow: "0 1px 4px 1px rgba(223, 224, 223, 0.7)",
      margin: "0 auto 1rem",
    },
  }));

  const classes = useStyles();

  return (
    <Box textAlign="center" mt={10} mb={5}>
      <Link to="/profile/preview">
        <Avatar
          src={user.image}
          alt="Profile Photo"
          className={classes.profileIcon}
        />
      </Link>

      <Typography component="h1" variant="h4" gutterBottom>
        {user.first_name} {age}
      </Typography>

      <Typography component="span" variant="h6">
        {user.profession}
      </Typography>
    </Box>
  );
}

export default ProfileIcon;
