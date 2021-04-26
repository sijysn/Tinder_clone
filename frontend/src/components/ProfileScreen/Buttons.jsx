import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SettingsIcon from "@material-ui/icons/Settings";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import ProfileButton from "./ProfileButton";

function Buttons() {
  return (
    <Box textAlign="center">
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
  );
}

export default Buttons;
