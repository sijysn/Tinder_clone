import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import Loader from "../components/Loader";
import CommonHeader from "../components/CommonHeader";
import LikesCount from "../components/GoldHomeScreen/LikesCount";
import Message from "../components/GoldHomeScreen/Message";
import LikesList from "../components/GoldHomeScreen/LikesList";

import { getLikesList } from "../actions/userActions";

function GoldHomeScreen() {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const likesList = useSelector((state) => state.likesList);
  const { loading, error, likes } = likesList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getLikesList());
    }
  }, [dispatch, history, userInfo]);

  return (
    <Box>
      <CommonHeader goldHome />

      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        likes && (
          <Box
            mx={1}
            maxHeight="100vh"
            p="0 1rem 10rem"
            style={{ overflowY: "scroll", flexWrap: "nowrap" }}
            className="max-width"
          >
            <LikesCount likes={likes} />

            {likes.length > 0 && <Message />}

            <LikesList likes={likes} />
          </Box>
        )
      )}
    </Box>
  );
}

export default GoldHomeScreen;
