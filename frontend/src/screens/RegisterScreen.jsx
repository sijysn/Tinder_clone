import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";

import calcAge from "../functions/calcAge";

import { register } from "../actions/userActions";

import { useStyles } from "../styles/styles.js";

export default function RegisterScreen() {
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("Male");
  const [birthDate, setBirthDate] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/recs";

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = (e) => {
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
    <Container maxWidth="xs" className={classes.registerScreen}>
      <CssBaseline />
      <Box mt={2} textAlign="center">
        <img
          src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
          style={{
            height: "30px",
            width: "30px",
          }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>

      {message && <Alert severity="error">{message}</Alert>}
      {loading && <Loader />}
      {error && <Alert severity="error">{error}</Alert>}

      <form className={classes.registerForm} onSubmit={submitHandler}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="First Name"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                required
                defaultValue="Male"
                aria-label="gender"
                value={genderIdentity}
                onChange={(e) => setGenderIdentity(e.target.value)}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Others"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Birth Date"
              type="date"
              value={birthDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid item xs={12}>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
