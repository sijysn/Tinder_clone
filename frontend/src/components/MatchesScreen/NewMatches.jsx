import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import NewMatch from "./NewMatch";
import Loader from "../Loader";

import { getNewMatchesList, getLikesList } from "../../actions/userActions";

const useStyles = makeStyles((theme) => ({
  iconLarge: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },

  tinderGoldIconBack: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: "50%",
    backgroundColor: "#e4c478",
  },

  newMatches: {
    display: "flex",
    overflowX: "auto",
  },
}));

function NewMatches() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const likesList = useSelector((state) => state.likesList);
  const { likes } = likesList;

  const newMatchesList = useSelector((state) => state.newMatchesList);
  const { loading, error, matches } = newMatchesList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(getLikesList());
      dispatch(getNewMatchesList());
    }
  }, [dispatch, userInfo]);

  const classes = useStyles();

  return (
    <Box className={classes.newMatches}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Box display="flex" flexDirection="row">
          {likes && likes.length > 0 && (
            <Link to={`/gold-home`}>
              <Box textAlign="center" mx={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={`${classes.tinderGoldIconBack} tinder-gold`}
                >
                  <Avatar
                    src={likes[0].image}
                    alt="new match"
                    className={classes.iconLarge}
                  />
                </Box>
                <Typography component="span" variant="h5">
                  {likes.length === 1
                    ? `${likes.length} Like`
                    : likes.length > 1 && `${likes.length} Likes`}
                </Typography>
              </Box>
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
      )}
    </Box>
  );
}

export default NewMatches;
