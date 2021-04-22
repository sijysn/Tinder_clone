import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function MessageBubble({ bgColor, color, text }) {
  return (
    <Box
      style={{
        backgroundColor: `${bgColor}`,
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
        minWidth: 0,
      }}
    >
      <Box textAlign="center">
        <Typography
          component="p"
          variant="h5"
          align="left"
          style={{ color: `${color}`, overflowWrap: "break-word" }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default MessageBubble;
