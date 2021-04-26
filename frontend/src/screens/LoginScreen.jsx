import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";
import LoginForm from "../components/LoginScreen/LoginForm";
import LogoIcon from "../components/LogoIcon";

import useStyles from "../styles/styles.js";

export default function LoginScreen() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const redirect = location.search ? location.search.split("=")[1] : "/recs";

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [history, userInfo, redirect]);

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box className={classes.formContainer}>
        <LogoIcon title="Sign In" />

        {loading ? (
          <Loader style={{ marginTop: "2rem" }} />
        ) : (
          <Box>
            {error && (
              <Box mt={2}>
                <Alert severity="error">{error}</Alert>
              </Box>
            )}
            <LoginForm redirect={redirect} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
