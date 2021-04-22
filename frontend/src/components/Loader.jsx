import React from "react";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

function Loader({ style }) {
  return (
    <Box textAlign="center" m="0 auto" style={style}>
      <CircularProgress size="3rem" color="secondary">
        <Typography component="srOnly">Loading...</Typography>
      </CircularProgress>
    </Box>
  );
}

export default Loader;
