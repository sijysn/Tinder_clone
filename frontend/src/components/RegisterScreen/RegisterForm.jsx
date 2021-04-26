import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";

import { genderIdentities } from "../../constants/genderConstants";

import useStyles from "../../styles/styles.js";

function RegisterForm({ onSubmit, redirect }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("Male");
  const [birthDate, setBirthDate] = useState("");

  return (
    <form
      className={classes.registerForm}
      onSubmit={(e) =>
        onSubmit(
          e,
          name,
          email,
          password,
          confirmPassword,
          genderIdentity,
          birthDate
        )
      }
    >
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
              {genderIdentities.map((genderName) => (
                <FormControlLabel
                  key={genderName}
                  value={genderName}
                  control={<Radio />}
                  label={genderName}
                />
              ))}
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
  );
}

export default RegisterForm;
