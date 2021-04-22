import React from "react";

import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";

const Empty = () => {
  return (
    <Box className="empty">
      <Box className="empty__circle-container">
        <Box className="empty__circle"></Box>
        <Box className="empty__circle empty__circle_delay"></Box>
        <PersonIcon />
      </Box>
    </Box>
  );
};

export default Empty;
