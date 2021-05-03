import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const SwipeButtons = ({ onClick }) => {
  const isBlocked = useSelector((state) => state.isBlocked);

  const like = useCallback((e) => onClick(e, "like"), []);

  const nope = useCallback((e) => onClick(e, "nope"), []);

  return (
    <Box className="swipe-btns__container">
      <Box className="swipe-btns max-width">
        <IconButton className="swipe-btns__back" disabled={isBlocked}>
          <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton
          className="swipe-btns__dislike"
          disabled={isBlocked}
          onClick={nope}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipe-btns__super-like" disabled={isBlocked}>
          <StarRateIcon fontSize="large" />
        </IconButton>

        <IconButton
          className="swipe-btns__like"
          disabled={isBlocked}
          onClick={like}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipe-btns__boost" disabled={isBlocked}>
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SwipeButtons;
