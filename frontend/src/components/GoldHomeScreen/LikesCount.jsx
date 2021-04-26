import React from "react";

import Typography from "@material-ui/core/Typography";

function LikesCount({ likes }) {
  return (
    <Typography
      component="h1"
      variant="h4"
      style={{
        borderBottom: "1px solid #dfe0df",
        padding: "10px",
      }}
      paragraph
    >
      <strong>
        {"  "}
        {likes.length === 1
          ? `${likes.length} Like`
          : likes.length > 1
          ? `${likes.length} Likes`
          : "No New Likes"}
      </strong>
    </Typography>
  );
}

export default LikesCount;
