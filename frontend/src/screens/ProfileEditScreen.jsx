import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";
import SettingsHeader from "../components/SettingsHeader";
import ProfilePhotoUploader from "../components/ProfileEditScreen/ProfilePhotoUploader";
import EditForm from "../components/ProfileEditScreen/EditForm";

import { getUserDetails } from "../actions/userActions";

function ProfileEditScreen() {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (!userInfo) history.push("/login");

    if (!user) dispatch(getUserDetails());
  }, [dispatch, history, userInfo, user]);

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

                <EditForm />
              </Box>
            )
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default ProfileEditScreen;
