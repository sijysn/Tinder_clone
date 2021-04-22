import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";

import LatestMessage from "./LatestMessage";
import Loader from "../Loader";

function LatestMessages({ history }) {
  const [latestMessagesList, setLatestMessagesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(async () => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  useEffect(() => {
    setLoading(true);

    let isMounted = true;

    setInterval(async () => {
      if (isMounted) {
        const { data } = await axios.get(
          `/api/messages/latest/${userInfo.id}/`,
          config
        );

        setLatestMessagesList(data);
        setLoading(false);
      }
    }, 1000);

    return () => (isMounted = false);
  }, []);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          {latestMessagesList.length > 0 &&
            latestMessagesList.map((item) => (
              <LatestMessage item={item} key={item.id} />
            ))}
        </Box>
      )}
    </Box>
  );
}

export default LatestMessages;
