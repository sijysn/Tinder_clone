import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

import CommonHeader from "../components/CommonHeader";
import NewMatches from "../components/MatchesScreen/NewMatches";
import LatestMessages from "../components/MatchesScreen/LatestMessages";

import useStyles from "../styles/styles.js";

function MatchesScreen() {
  const history = useHistory();

  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  return (
    <Box>
      <CommonHeader matches />

      <Box className={classes.matchesScreen}>
        <ScopedCssBaseline>
          <Box color="#FF5864" mx={1}>
            <Typography component="h1" variant="h5" paragraph>
              <strong>New Matches</strong>
            </Typography>

            <NewMatches />
          </Box>

          <Box mt={3} color="#FF5864" mx={1}>
            <Typography component="h1" variant="h5" gutterBottom>
              <strong>Messages</strong>
            </Typography>

            <LatestMessages />
          </Box>
        </ScopedCssBaseline>
      </Box>
    </Box>
  );
}

export default MatchesScreen;
