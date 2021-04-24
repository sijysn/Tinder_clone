import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useStyles } from "../../styles/styles.js";

function MessageHeader({ chatUserInfo }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.messageHeader} alignItems="center">
      <Grid item container direction="row" justify="space-between">
        <Grid item xs={3} sm={3}>
          <Box textAlign="left">
            <Link to="/matches">
              <IconButton className={classes.messageHeader__icon}>
                <ArrowBackIosIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6}>
          {chatUserInfo && (
            <Link to={`/messages/${chatUserInfo.id}/profile`}>
              <Grid container ction="row" justify="center" alignItems="center">
                <Avatar
                  src={chatUserInfo.image}
                  alt="Profile Photo"
                  className={classes.messageHeader__icon}
                />
                <Box pl={2}>
                  <Typography component="h1" variant="h5">
                    {chatUserInfo.first_name
                      ? chatUserInfo.first_name
                      : "No User"}
                  </Typography>
                </Box>
              </Grid>
            </Link>
          )}
        </Grid>

        <Grid item xs={3} sm={3}>
          <Box textAlign="right">
            <IconButton>
              <MoreHorizIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MessageHeader;
