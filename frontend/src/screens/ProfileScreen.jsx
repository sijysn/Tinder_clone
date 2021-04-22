import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import CommonHeader from "../components/CommonHeader";
import ProfileButton from "../components/ProfileScreen/ProfileButton";
import Loader from "../components/Loader";

import calcAge from "../functions/calcAge";

import { getUserDetails } from "../actions/userActions";

function ProfileScreen({ history }) {
  const [age, setAge] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    profilePhoto: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      boxShadow: "0 1px 4px 1px rgba(223, 224, 223, 0.7)",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!user) {
      dispatch(getUserDetails(userInfo.id));
    } else {
      setAge(calcAge(user.birth_date));
    }
  }, [history, userInfo, user]);

  return (
    <Box component="div">
      <CommonHeader profile />

      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        user && (
          <ScopedCssBaseline>
            <Container maxWidth="sm">
              <Box component="div" textAlign="center" mt={10} mb={5}>
                <Link to="/profile/preview">
                  <IconButton>
                    <Avatar
                      src={user.image}
                      alt="Profile Photo"
                      className={classes.profilePhoto}
                    />
                  </IconButton>
                </Link>
                <Typography component="h1" variant="h4" gutterBottom>
                  {user.first_name} {age}
                </Typography>
                <Typography component="span" variant="h6">
                  {user.profession}
                </Typography>
              </Box>

              <Box component="div" textAlign="center">
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <ProfileButton to="/settings" title="SETTINGS">
                      <SettingsIcon fontSize="large" />
                    </ProfileButton>
                  </Grid>

                  <Grid item xs={4}>
                    <ProfileButton
                      to="/profile/edit"
                      className="profile__camera-wrapper"
                      color="secondary"
                      title="ADD MEDIA"
                    >
                      <CameraAltIcon
                        fontSize="large"
                        style={{
                          color: "#fff",
                        }}
                      />
                      <AddIcon
                        fontSize="small"
                        className="profile__camera-add"
                        style={{
                          backgroundColor: "#fff",
                          color: "#f50057",
                          borderRadius: "50%",
                        }}
                      />
                    </ProfileButton>
                  </Grid>

                  <Grid item xs={4}>
                    <ProfileButton to="/profile/edit" title="EDIT INFO">
                      <EditIcon fontSize="large" />
                    </ProfileButton>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </ScopedCssBaseline>
        )
      )}
    </Box>
  );
}

export default ProfileScreen;
