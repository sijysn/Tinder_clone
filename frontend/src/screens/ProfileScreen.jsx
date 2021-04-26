import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";

import CommonHeader from "../components/CommonHeader";
import ProfileIcon from "../components/ProfileScreen/ProfileIcon";
import Buttons from "../components/ProfileScreen/Buttons";
import Loader from "../components/Loader";

import calcAge from "../repositories/calcAge";

import { getUserDetails } from "../actions/userActions";

function ProfileScreen() {
  const history = useHistory();

  const [age, setAge] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) history.push("/login");
    else if (!user) dispatch(getUserDetails(userInfo.id));
    else setAge(calcAge(user.birth_date));
  }, [history, userInfo, user]);

  return (
    <Box position="relative">
      <CommonHeader profile />

      {loading ? (
        <Loader
          style={{
            position: "absolute",
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        userInfo &&
        user &&
        age && (
          <ScopedCssBaseline>
            <Container maxWidth="sm">
              <ProfileIcon user={user} age={age} />

              <Buttons />
            </Container>
          </ScopedCssBaseline>
        )
      )}
    </Box>
  );
}

export default ProfileScreen;
