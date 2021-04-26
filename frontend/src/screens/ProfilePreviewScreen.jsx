import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";
import SettingsHeader from "../components/SettingsHeader";
import PreviewCard from "../components/PreviewCard";

import { getUserDetails } from "../actions/userActions";

function ProfilePreviewScreen() {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) history.push("/login");

    if (!user) dispatch(getUserDetails());
  }, [dispatch, history, userInfo, user]);

  return (
    <Container>
      <CssBaseline />
      <Box my={1}>
        <SettingsHeader title="PREVIEW" backTo="/profile" />
      </Box>

      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        userInfo &&
        user && (
          <PreviewCard person={user} className="card__preview"></PreviewCard>
        )
      )}
    </Container>
  );
}

export default ProfilePreviewScreen;
