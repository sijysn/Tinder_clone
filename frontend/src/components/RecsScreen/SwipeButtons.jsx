import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import { onBlock, offBlock } from "../../actions/blockActions";

import createChatRoom from "../../functions/createChatRoom";

const SwipeButtons = ({ cardIsEmpty }) => {
  const dispatch = useDispatch();

  const cardList = useSelector((state) => state.cardList);
  const { loading, cards } = cardList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const isBlocked = useSelector((state) => state.isBlocked);

  useEffect(() => {
    if (loading === false && cards && cards.length > 0) {
      dispatch(offBlock());
    }
  }, [dispatch, loading]);

  const swipeCard = async (likeOrNope) => {
    if (isBlocked) return;

    const target = document.getElementsByClassName("card")[0];
    const nextTarget = document.getElementsByClassName("card")[1];

    dispatch(onBlock());

    // Show LIKE or NOPE
    document.getElementsByClassName(`card__${likeOrNope}`)[0].style.opacity = 1;

    // Add animation of LIKE or NOPE
    setTimeout(() => target.classList.add(likeOrNope), 100);

    // Remove the swiped Card
    setTimeout(() => target.remove(), 600);

    // React by LIKE or NOPE
    await axios.post(
      "/api/reactions/swipe/",
      {
        fromUserId: userInfo.id,
        toUserId: Number(target.id),
        status: likeOrNope === "like" ? "L" : "N",
      },
      config
    );

    // If match, create chat room and chat room users
    if (likeOrNope === "like") {
      createChatRoom(userInfo.id, target.id, config);
    }

    // If all Cards have been swiped, show Empty component
    if (nextTarget === undefined) {
      setTimeout(() => cardIsEmpty(), 600);
      dispatch(onBlock());
    } else {
      setTimeout(() => dispatch(offBlock()), 600);
    }
  };

  return (
    <Box className="swipe-btns__container">
      <Box className="swipe-btns max-width">
        <IconButton className="swipe-btns__back" disabled={isBlocked}>
          <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton
          className="swipe-btns__dislike"
          disabled={isBlocked}
          onClick={() => {
            swipeCard("nope");
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipe-btns__super-like" disabled={isBlocked}>
          <StarRateIcon fontSize="large" />
        </IconButton>

        <IconButton
          className="swipe-btns__like"
          disabled={isBlocked}
          onClick={() => {
            swipeCard("like");
          }}
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
