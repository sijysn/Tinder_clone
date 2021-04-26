import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useStyles from "../../styles/styles.js";

function SettingsForm({ updateHandler, logoutHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    setName(userInfo.first_name);
    setEmail(userInfo.email);
  }, [userInfo]);

  return (
    <form
      onSubmit={(e) => updateHandler(e, name, email, password, confirmPassword)}
      className={classes.settingsForm}
    >
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
  );
}

export default SettingsForm;
