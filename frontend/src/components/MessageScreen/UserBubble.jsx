import React from "react";

import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";

import MessageBubble from "./MessageBubble";

function UserBubble({ message }) {
  return (
    <Box display="flex" justifyContent="flex-end" ml={8}>
      {message.good && (
        <FavoriteIcon fontSize="small" style={{ color: "#f50057" }} />
      )}

      <MessageBubble bgColor="#46b3e6" color="#fff" text={message.text} />
    </Box>
  );
}

export default UserBubble;
