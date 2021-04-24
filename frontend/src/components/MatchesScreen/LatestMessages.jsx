import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";

import LatestMessage from "./LatestMessage";
import Loader from "../Loader";

function LatestMessages() {
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

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    const checkMessage = async () => {
      const { data } = await axios.get(
        `/api/messages/latest/${userInfo.id}/`,
        config
      );

      setLatestMessagesList(data);
    };

    const repeat = () => {
      if (isMounted) {
        checkMessage();
        setTimeout(repeat, 5000);
      }
    };

    repeat();

    setLoading(false);

    return () => {
      isMounted = false;
    };
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
