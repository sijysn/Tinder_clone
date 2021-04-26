import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function LogoIcon({ title }) {
  return (
    <Box textAlign="center">
      <img
        src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
        style={{
          height: "30px",
          width: "30px",
        }}
      />
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </Box>
  );
}

export default LogoIcon;
