import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import CommonHeader from "../components/CommonHeader";
import Like from "../components/GoldHomeScreen/Like";
import Loader from "../components/Loader";

import { getLikesList } from "../actions/userActions";

function GoldHomeScreen({ history }) {
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
            <Typography
              component="h1"
              variant="h4"
              style={{
                borderBottom: "1px solid #dfe0df",
                padding: "10px",
              }}
              paragraph
            >
              <strong>
                {"  "}
                {likes.length === 1
                  ? `${likes.length} Like`
                  : likes.length > 1
                  ? `${likes.length} Likes`
                  : "No New Likes"}
              </strong>
            </Typography>

            {likes.length > 0 && (
              <Typography
                component="h2"
                variant="h5"
                color="textSecondary"
                align="center"
                paragraph
              >
                Upgrade to Gold to see people
                <br />
                who already liked you.
              </Typography>
            )}

            <Grid
              container
              spacing={1}
              justify="space-evenly"
              className="max-width"
            >
              {likes.length >= 1 && (
                <Grid item xs={6}>
                  <Like image={likes[0].image}></Like>
                </Grid>
              )}

              {likes.length >= 1 && (
                <Grid item xs={6}>
                  {likes.length >= 2 && <Like image={likes[1].image}></Like>}
                </Grid>
              )}

              {likes.length >= 3 && (
                <Grid item xs={6}>
                  <Like image={likes[2].image}></Like>
                </Grid>
              )}

              {likes.length >= 3 && (
                <Grid item xs={6}>
                  {likes.length >= 4 && <Like image={likes[3].image}></Like>}
                </Grid>
              )}

              {likes.length >= 5 && (
                <Grid item xs={6}>
                  <Like image={likes[4].image}></Like>
                </Grid>
              )}

              {likes.length >= 5 && (
                <Grid item xs={6}>
                  {likes.length >= 6 && <Like image={likes[5].image}></Like>}
                </Grid>
              )}
            </Grid>
          </Box>
        )
      )}
    </Box>
  );
}

export default GoldHomeScreen;
