import React from "react";

import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import MessageBubble from "./MessageBubble";

function ChatUserBubble({ message, chatUserInfo, onClick }) {
  return (
    <Box display="flex" justifyContent="flex-start" mr={8}>
      <Avatar
        src={chatUserInfo ? chatUserInfo.image : "unknown_ffqtxf"}
        alt="Profile Photo"
        style={{
          height: "3rem",
          width: "3rem",
          marginRight: "1rem",
        }}
      />

      <MessageBubble bgColor="#dddddd" color="#000" text={message.text} />

      <Box
        position="absolute"
        right="1rem"
        top="50%"
        style={{ transform: "translateY(-50%)" }}
      >
        {message.good ? (
          <FavoriteIcon
            onClick={() => onClick(message)}
            style={{ color: "#f50057" }}
          />
        ) : (
          <FavoriteBorderIcon onClick={() => onClick(message)} />
        )}
      </Box>
    </Box>
  );
}

export default ChatUserBubble;
