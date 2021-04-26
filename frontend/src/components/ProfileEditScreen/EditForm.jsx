import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import {
  genderIdentities,
  sexualPreferences,
} from "../../constants/genderConstants";

import {
  updateUserDetails,
  getUserDetails,
  listCards,
} from "../../actions/userActions";

import { USER_DETAILS_UPDATE_RESET } from "../../constants/userConstants";

import useStyles from "../../styles/styles.js";

function EditForm() {
  const history = useHistory();

  const [profession, setProfession] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("Male");
  const [inputGenderIdentity, setInputGenderIdentity] = useState("Male");
  const [sexualPreference, setSexualPreference] = useState("All");
  const [inputSexualPreference, setInputSexualPreference] = useState("All");

  const classes = useStyles();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userUpdateDetails = useSelector((state) => state.userUpdateDetails);
  const { success } = userUpdateDetails;

  const dispatch = useDispatch();

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
    setProfession(user.profession ? user.profession : "");
    setSelfIntroduction(user.self_introduction ? user.self_introduction : "");
    setGenderIdentity(user.gender_identity);
    setInputGenderIdentity(user.gender_identity);
    setSexualPreference(user.sexual_preference);
    setInputSexualPreference(user.sexual_preference);
  }, [user]);

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_DETAILS_UPDATE_RESET });
      dispatch(listCards());
      dispatch(getUserDetails());
      history.push("/profile");
    }
  }, [dispatch, history, success]);

  return (
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
      />

      <TextField
        label="Self Introduction"
        value={selfIntroduction}
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        onChange={(e) => setSelfIntroduction(e.target.value)}
      />

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
  );
}

export default EditForm;
