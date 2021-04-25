import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import UserBubble from "./UserBubble";
import ChatUserBubble from "./ChatUserBubble";

function MessageHistory({
  messages,
  chatUserId,
  chatUserInfo,
  scrollBottomRef,
  onClick,
}) {
  return (
    <Grid
      container
      direction="column"
      spacing={1}
      style={{
        overflowY: "scroll",
        maxHeight: "100vh",
        padding: "9rem 1rem 20rem",
        flexWrap: "nowrap",
        zIndex: "-1",
      }}
      className="max-width"
    >
      {messages.length > 0 &&
        messages.map((message, index) => (
          <Grid container item key={message.id}>
            <Grid
              item
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              {message.user_id == chatUserId ? (
                <ChatUserBubble
                  message={message}
                  chatUserInfo={chatUserInfo}
                  onClick={onClick}
                />
              ) : (
                <UserBubble message={message} />
              )}
            </Grid>
            {index + 1 == messages.length && (
              <Box ref={scrollBottomRef} visibility="hidden">
                latest message
              </Box>
            )}
          </Grid>
        ))}
    </Grid>
  );
}

export default MessageHistory;
