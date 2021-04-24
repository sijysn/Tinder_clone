import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import SettingsHeader from "../components/SettingsHeader";
import PreviewCard from "../components/PreviewCard";

function MessageProfilePreviewScreen() {
  const history = useHistory();
  const { id } = useParams();

  const [chatUserInfo, setChatUserInfo] = useState();

  const noUser = { first_name: "No User" };

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
    } else {
      const { data } = await axios.get(`/api/users/cards/id/${id}/`, config);
      setChatUserInfo(data);
    }
  }, [history, userInfo]);

  return (
    <Container>
      <CssBaseline />
      <Box my={1}>
        <SettingsHeader title="PREVIEW" backTo={`/messages/${id}`} />
      </Box>

      <PreviewCard
        person={chatUserInfo ? chatUserInfo : noUser}
        className="card__preview"
      ></PreviewCard>
    </Container>
  );
}

export default MessageProfilePreviewScreen;
