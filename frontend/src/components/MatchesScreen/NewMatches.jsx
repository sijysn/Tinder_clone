import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";

import Loader from "../Loader";
import PotentialMatches from "./PotentialMatches";
import NewMatch from "./NewMatch";

import useStyles from "../../styles/styles.js";

import { getNewMatchesList, getLikesList } from "../../actions/userActions";

function NewMatches() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const likesList = useSelector((state) => state.likesList);
  const { likes } = likesList;

  const newMatchesList = useSelector((state) => state.newMatchesList);
  const { loading, error, matches } = newMatchesList;

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (userInfo) {
      dispatch(getLikesList());
      dispatch(getNewMatchesList());
    }
  }, [dispatch, userInfo]);

  return (
    <Box className={classes.newMatches}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        matches &&
        likes && (
          <Box display="flex" flexDirection="row">
            {likes && likes.length > 0 && (
              <Link to={`/gold-home`}>
                <PotentialMatches likes={likes} />
              </Link>
            )}

            {matches &&
              matches.length > 0 &&
              matches.map((person) => (
                <Link to={`/messages/${person.id}`} key={person.id}>
                  <NewMatch person={person} />
                </Link>
              ))}
          </Box>
        )
      )}
    </Box>
  );
}

export default NewMatches;
