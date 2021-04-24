import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import SettingsHeader from "../components/SettingsHeader";

import {
  logout,
  updateUserProfile,
  getUserDetails,
} from "../actions/userActions";

import { USER_PROFILE_UPDATE_RESET } from "../constants/userConstants";

import { useStyles } from "../styles/styles.js";

function SettingsScreen() {
  const history = useHistory();

  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const updateHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(updateUserProfile(name, email, password));
    } else {
      setMessage("Passwords do not match");
    }
  };

  const logoutHandler = () => dispatch(logout());

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (success) {
      dispatch({ type: USER_PROFILE_UPDATE_RESET });
      dispatch(getUserDetails());
      history.push("/profile");
    } else {
      setName(userInfo.first_name);
      setEmail(userInfo.email);
    }
  }, [dispatch, history, userInfo, success]);

  return (
    <Box>
      <SettingsHeader title="SETTINGS" backTo="/profile" />

      <Container className={classes.paper} maxWidth="xs">
        <CssBaseline />
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

        <form onSubmit={updateHandler} className={classes.settingsForm}>
          <TextField
            required
            label="First Name"
            value={name}
            variant="outlined"
            autoFocus
            fullWidth
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          ></TextField>

          <TextField
            required
            type="email"
            label="Email Address"
            value={email}
            variant="outlined"
            autoComplete="email"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>

          <TextField
            required
            type="password"
            label="Password"
            value={password}
            variant="outlined"
            autoComplete="current-password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>

          <TextField
            required
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            variant="outlined"
            autoComplete="current-password"
            fullWidth
            margin="normal"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Update
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default SettingsScreen;
