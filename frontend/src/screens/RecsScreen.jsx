import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Alert from "@material-ui/lab/Alert";

import CommonHeader from "../components/CommonHeader";
import SwipeableCards from "../components/RecsScreen/SwipeableCards";
import SwipeButtons from "../components/RecsScreen/SwipeButtons";
import Empty from "../components/RecsScreen/Empty";
import Loader from "../components/Loader";

import { getUserDetails } from "../actions/userActions";

const RecsScreen = ({ history }) => {
  const [isFinished, setIsFinished] = useState(false);

  const cardIsEmpty = () => setIsFinished(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

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
    <div>
      <CommonHeader recs />
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        userInfo && (
          <ScopedCssBaseline>
            {isFinished ? (
              <Empty />
            ) : (
              <SwipeableCards cardIsEmpty={cardIsEmpty} />
            )}
            <SwipeButtons cardIsEmpty={cardIsEmpty} />
          </ScopedCssBaseline>
        )
      )}
    </div>
  );
};

export default RecsScreen;
