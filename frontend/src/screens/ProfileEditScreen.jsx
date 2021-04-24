import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";
import SettingsHeader from "../components/SettingsHeader";
import ProfilePhotoUploader from "../components/ProfileEditScreen/ProfilePhotoUploader";

import {
  updateUserDetails,
  getUserDetails,
  listCards,
} from "../actions/userActions";

import { USER_DETAILS_UPDATE_RESET } from "../constants/userConstants";

import {
  genderIdentities,
  sexualPreferences,
} from "../constants/genderConstants";

import { useStyles } from "../styles/styles.js";

function ProfileEditScreen() {
  const history = useHistory();

  const classes = useStyles();

  const [profession, setProfession] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("Male");
  const [inputGenderIdentity, setInputGenderIdentity] = useState("Male");
  const [sexualPreference, setSexualPreference] = useState("All");
  const [inputSexualPreference, setInputSexualPreference] = useState("All");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateDetails = useSelector((state) => state.userUpdateDetails);
  const { success } = userUpdateDetails;

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserDetails(
        profession,
        selfIntroduction,
        genderIdentity,
        sexualPreference
      )
    );
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!user) {
      dispatch(getUserDetails());
    } else if (success) {
      dispatch({ type: USER_DETAILS_UPDATE_RESET });
      dispatch(listCards());
      dispatch(getUserDetails());
      history.push("/profile");
    } else {
      setProfession(user.profession ? user.profession : "");
      setSelfIntroduction(user.self_introduction ? user.self_introduction : "");
      setGenderIdentity(user.gender_identity);
      setInputGenderIdentity(user.gender_identity);
      setSexualPreference(user.sexual_preference);
      setInputSexualPreference(user.sexual_preference);
    }
  }, [dispatch, history, userInfo, user, success]);

  return (
    <Box>
      <SettingsHeader title="EDITINGS" backTo="/profile" />

      <Box mt={1}>
        <Container maxWidth="xs">
          <CssBaseline />

          {loading ? (
            <Loader />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            user && (
              <Box
                textAlign="center"
                maxHeight="100vh"
                pb="5rem"
                style={{
                  overflowY: "scroll",
                  flexWrap: "nowrap",
                }}
              >
                <ProfilePhotoUploader />

                <form onSubmit={updateHandler}>
                  <TextField
                    label="Profession"
                    value={profession}
                    variant="outlined"
                    autoFocus
                    fullWidth
                    margin="normal"
                    multiline
                    onChange={(e) => setProfession(e.target.value)}
                  ></TextField>

                  <TextField
                    label="Self Introduction"
                    value={selfIntroduction}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    onChange={(e) => setSelfIntroduction(e.target.value)}
                  ></TextField>

                  <Autocomplete
                    fullWidth
                    options={genderIdentities}
                    value={genderIdentity}
                    onChange={(e, newValue) => setGenderIdentity(newValue)}
                    inputValue={inputGenderIdentity}
                    onInputChange={(e, newInputValue) =>
                      setInputGenderIdentity(newInputValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Gender Identity"
                        variant="outlined"
                        margin="normal"
                      />
                    )}
                  />

                  <Autocomplete
                    fullWidth
                    options={sexualPreferences}
                    value={sexualPreference}
                    onChange={(e, newValue) => setSexualPreference(newValue)}
                    inputValue={inputSexualPreference}
                    onInputChange={(e, newInputValue) =>
                      setInputSexualPreference(newInputValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Sexual Preference"
                        variant="outlined"
                        margin="normal"
                      />
                    )}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    UPDATE
                  </Button>
                </form>
              </Box>
            )
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default ProfileEditScreen;
