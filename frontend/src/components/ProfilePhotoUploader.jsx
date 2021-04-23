import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";

import { USER_DETAILS_SUCCESS } from "../constants/userConstants";

function ProfilePhotoUploader() {
  const [image, setImage] = useState("unknown_ffqtxf");
  const [message, setMessage] = useState();
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const uploadImageHandler = async (e) => {
    setUploading(true);

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("user_id", userInfo.id);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/users/profile/image/upload/",
        formData,
        config
      );

      setImage(data.image);
      setUploading(false);

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      setMessage(error);
      setUploading(false);
    }
  };

  useEffect(() => {
    setImage(user.image);
  }, [user]);

  return (
    <Box>
      {message && <Alert severity="error">{message}</Alert>}
      {uploading ? (
        <Loader />
      ) : (
        <CardMedia
          image={image ? image : "unknown_ffqtxf"}
          title="Profile Photo"
          style={{
            position: "relative",
            height: "0",
            paddingTop: "56.25%",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            alignItems="center"
            justify="flex-end"
            style={{ position: "absolute", bottom: "0", right: "0" }}
          >
            <Box m={2}>
              <InputLabel htmlFor="upload-image">
                <Input
                  id="upload-image"
                  type="file"
                  name="upload-image"
                  style={{ display: "none" }}
                  onChange={uploadImageHandler}
                />

                <IconButton
                  style={{
                    backgroundColor: "#f50057",
                  }}
                  component="span"
                >
                  <AddAPhotoIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </InputLabel>
            </Box>
          </Grid>
        </CardMedia>
      )}
    </Box>
  );
}

export default ProfilePhotoUploader;
