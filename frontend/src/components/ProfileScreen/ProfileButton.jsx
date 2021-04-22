import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function ProfileButton({ to, className, color, title, children }) {
  return (
    <Link to={to}>
      <IconButton
        className={className && className}
        color={color ? color : "default"}
        style={{
          boxShadow: "0 1px 4px 1px rgba(223, 224, 223, 0.7)",
        }}
      >
        {children}
      </IconButton>
      <Typography component="span" variant="button" display="block">
        {title}
      </Typography>
    </Link>
  );
}

export default ProfileButton;
