import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";
import SettingsHeader from "../components/SettingsHeader";
import SettingsForm from "../components/SettingsScreen/SettingsForm";

import {
  logout,
  updateUserProfile,
  getUserDetails,
} from "../actions/userActions";

import { USER_PROFILE_UPDATE_RESET } from "../constants/userConstants";

import useStyles from "../styles/styles.js";

function SettingsScreen() {
  const history = useHistory();

  const classes = useStyles();

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading, success } = userUpdateProfile;

  const updateHandler = (e, name, email, password, confirmPassword) => {
    e.preventDefault();
    if (password === confirmPassword)
      dispatch(updateUserProfile(name, email, password));
    else setMessage("Passwords do not match");
  };

  const logoutHandler = () => dispatch(logout());

  useEffect(() => {
    if (!userInfo) history.push("/login");
    if (success) {
      dispatch({ type: USER_PROFILE_UPDATE_RESET });
      dispatch(getUserDetails());
      history.push("/profile");
    }
  }, [dispatch, history, userInfo, success]);

  return (
    <Box>
      <SettingsHeader title="SETTINGS" backTo="/profile" />

      <Container className={classes.formContainer} maxWidth="xs">
        <CssBaseline />
        {loading ? (
          <Loader />
        ) : (
          userInfo && (
            <Box>
              {message && <Alert severity="error">{message}</Alert>}

              <Typography
                component="h2"
                variant="h5"
                align="left"
                display="block"
                style={{ width: "100%", paddingLeft: "1rem" }}
              >
                ACCOUNT SETTINGS
              </Typography>

              <SettingsForm
                updateHandler={updateHandler}
                logoutHandler={logoutHandler}
              />
            </Box>
          )
        )}
      </Container>
    </Box>
  );
}

export default SettingsScreen;
