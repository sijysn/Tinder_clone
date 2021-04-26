import React from "react";

import Typography from "@material-ui/core/Typography";

function Message() {
  return (
    <Typography
      component="h2"
      variant="h5"
      color="textSecondary"
      align="center"
      paragraph
    >
      Upgrade to Gold to see people
      <br />
      who already liked you.
    </Typography>
  );
}

export default Message;
