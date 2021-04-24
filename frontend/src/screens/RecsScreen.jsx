import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

import CommonHeader from "../components/CommonHeader";
import SwipeableCards from "../components/RecsScreen/SwipeableCards";
import SwipeButtons from "../components/RecsScreen/SwipeButtons";
import Empty from "../components/RecsScreen/Empty";

import { getUserDetails } from "../actions/userActions";

const RecsScreen = () => {
  const history = useHistory();

  const [isFinished, setIsFinished] = useState(false);

  const cardIsEmpty = () => setIsFinished(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!user) {
      dispatch(getUserDetails());
    }
  }, [history, userInfo, user]);

  return (
    <Box>
      <CommonHeader recs />
      <ScopedCssBaseline>
        {isFinished ? <Empty /> : <SwipeableCards cardIsEmpty={cardIsEmpty} />}

        <SwipeButtons cardIsEmpty={cardIsEmpty} />
      </ScopedCssBaseline>
    </Box>
  );
};

export default RecsScreen;
