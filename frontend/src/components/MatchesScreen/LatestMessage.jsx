import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ReplyIcon from "@material-ui/icons/Reply";

import { makeStyles } from "@material-ui/core/styles";

import Loader from "../Loader";

const useStyles = makeStyles((theme) => ({
  iconLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function LatestMessage({ item }) {
  const classes = useStyles();

  const [chatUserInfo, setChatUserInfo] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(async () => {
    if (!userInfo) return;

    const { data } = await axios.get(
      item.user_id == userInfo.id
        ? `/api/users/chatuser/${userInfo.id}/${item.chat_room_id}/`
        : `/api/users/cards/id/${item.user_id}/`,
      config
    );

    setChatUserInfo(data);
  }, [userInfo]);

  return chatUserInfo ? (
    <HashLink to={`/messages/${chatUserInfo.id}`}>
      <Box
        display="flex"
        flexDirection="row"
        p={1}
        borderBottom="1px solid #dfe0df"
        alignItems="center"
      >
        <Avatar
          src={chatUserInfo.image}
          alt="Profile Photo"
          className={classes.iconLarge}
        />
        <Box p={2} minWidth="0">
          <Typography component="h2" variant="h5">
            <strong>{chatUserInfo.first_name}</strong>
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color={
              !item.read && item.user_id != userInfo.id
                ? "textPrimary"
                : "textSecondary"
            }
          >
            <Box component="span" display="flex" justifyContent="flex-start">
              <Box component="span">
                {item.user_id == userInfo.id && <ReplyIcon />}
              </Box>
              <Box
                component="span"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {item.text}
              </Box>
            </Box>
          </Typography>
        </Box>
      </Box>
    </HashLink>
  ) : (
    <Loader />
  );
}

export default LatestMessage;
