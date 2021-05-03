import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

import LogoIcon from "../components/LogoIcon";
import RegisterForm from "../components/RegisterScreen/RegisterForm";
import Loader from "../components/Loader";

import useStyles from "../styles/styles.js";

import calcAge from "../repositories/calcAge";

import { register } from "../actions/userActions";

export default function RegisterScreen() {
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/recs";

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = (
    e,
    name,
    email,
    password,
    confirmPassword,
    genderIdentity,
    birthDate
  ) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else if (calcAge(birthDate) < 18) {
      setMessage("People under the age of 18 are not allowed to register.");
    } else {
      dispatch(register(name, email, password, genderIdentity, birthDate));
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box className={classes.formContainer}>
        <LogoIcon title="Sign Up" />

        {message && <Alert severity="error">{message}</Alert>}
        {loading && <Loader />}
        {error && <Alert severity="error">{error}</Alert>}

        <RegisterForm onSubmit={submitHandler} redirect={redirect} />
      </Box>
    </Container>
  );
}
