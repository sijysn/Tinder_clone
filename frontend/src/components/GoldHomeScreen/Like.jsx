import React from "react";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

function Like({ image }) {
  return (
    <Card style={{ width: "100%", borderRadius: "10px" }}>
      <CardActionArea style={{ position: "relative" }}>
        <CardMedia
          image={
            image
              ? image
              : "https://res.cloudinary.com/dfw3mlaic/image/upload/v1/images/unknown_ffqtxf"
          }
          style={{
            width: "50vw",
            maxWidth: "384px",
            height: "60vw",
            maxHeight: "460.8px",
            filter: "blur(10px)",
          }}
          title="Profile Photo"
        />
        <Box
          component="h3"
          position="absolute"
          left="1rem"
          bottom="1rem"
          width="60%"
          height="0.8rem"
          borderRadius="10px"
          style={{ backgroundColor: "#fff", opacity: "0.3" }}
        ></Box>
        <Box
          component="p"
          position="absolute"
          left="1rem"
          bottom="0"
          width="50%"
          height="0.8rem"
          opacity="0.3"
          borderRadius="10px"
          style={{ backgroundColor: "#000", opacity: "0.3" }}
        ></Box>
      </CardActionArea>
    </Card>
  );
}

export default Like;
