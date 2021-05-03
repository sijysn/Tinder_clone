import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "@material-ui/lab/Alert";

import CommonHeader from "../components/CommonHeader";
import SwipeableCards from "../components/RecsScreen/SwipeableCards";
import SwipeButtons from "../components/RecsScreen/SwipeButtons";
import Empty from "../components/RecsScreen/Empty";

import { getUserDetails, listCards } from "../actions/userActions";
import { onBlock, offBlock } from "../actions/blockActions";

import createChatRoomBy from "../repositories/createChatRoomBy";
import swipeCardBy from "../repositories/swipeCardBy";

const RecsScreen = () => {
  const history = useHistory();

  const [cardIsEmpty, setCardIsEmpty] = useState(false);

  const ref = useRef([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const cardList = useSelector((state) => state.cardList);
  const { loading, error, cards } = cardList;

  const isBlocked = useSelector((state) => state.isBlocked);

  const dispatch = useDispatch();

  let isTouched = false;

  const clickSwipeButton = async (e, likeOrNope) => {
    e.preventDefault();

    dispatch(onBlock());

    const targetCardWrap = ReactDOM.findDOMNode(
      document.getElementsByClassName("card-wrapper")[0]
    );
    const targetCard = ReactDOM.findDOMNode(
      document.getElementsByClassName("card")[0]
    );
    const targetLike = ReactDOM.findDOMNode(
      document.getElementsByClassName("card__like")[0]
    );
    const targetNope = ReactDOM.findDOMNode(
      document.getElementsByClassName("card__nope")[0]
    );

    const nextTargetCardWrap = ReactDOM.findDOMNode(
      document.getElementsByClassName("card-wrapper")[1]
    );

    targetCard.style.transition = "all 0.5s ease-in-out";

    if (likeOrNope == "like") {
      targetLike.style.opacity = 1;
      setTimeout(() => {
        targetCard.style.transform = "translateX(200%) rotate(30deg)";
      }, 200);
    }

    if (likeOrNope == "nope") {
      targetNope.style.opacity = 1;
      setTimeout(
        () => (targetCard.style.transform = "translateX(-200%) rotate(-30deg)"),
        200
      );
    }

    setTimeout(() => targetCardWrap.remove(), 500);

    // React by Like or Nope
    await swipeCardBy(userInfo, targetCard.id, likeOrNope);

    // If match, create chat room and register chat room users
    if (likeOrNope === "like") createChatRoomBy(userInfo, targetCard.id);

    if (nextTargetCardWrap == undefined)
      setTimeout(() => setCardIsEmpty(true), 500);
    else setTimeout(() => dispatch(offBlock()), 500);
  };

  const swipeStart = (e, selfIntroIsDisplayed) => {
    e.preventDefault();

    if (selfIntroIsDisplayed) return;
    if (isBlocked) return;

    isTouched = true;
  };

  const swipeMove = (e, data, card, like, nope, selfIntroIsDisplayed) => {
    if (selfIntroIsDisplayed) return;
    if (!isTouched) return;
    if (isBlocked) return;

    card.current.style.transition = "none";

    if (data.x >= 0) like.current.style.opacity = data.x / 100;
    else nope.current.style.opacity = -data.x / 100;

    card.current.style.left = data.x + "px";
    card.current.style.top = data.y + "px";

    const rotate = data.x / 10;
    card.current.style.transform = `rotate(${rotate}deg)`;
  };

  const swipeEnd = async (
    e,
    data,
    cardWrap,
    card,
    like,
    nope,
    selfIntroIsDisplayed,
    index
  ) => {
    if (selfIntroIsDisplayed) return;
    if (!isTouched) return;
    if (isBlocked) return;

    card.current.style.transition = "all 0.5s ease-in-out";

    // Bound if swiping range is short
    if (Math.abs(data.x) < 100 && Math.abs(data.y) < 100) {
      card.current.style.left = 0;
      card.current.style.top = 0;
      card.current.style.transform = "rotate(0)";
      like.current.style.opacity = 0;
      nope.current.style.opacity = 0;
    } else {
      dispatch(onBlock());

      // Mark card as "like" or "nope" based on distance
      let likeOrNope;
      if (data.x >= 75) {
        card.current.style.left = "150%";
        likeOrNope = "like";
      } else if (data.x <= -75) {
        card.current.style.left = "-150%";
        likeOrNope = "nope";
      } else if (data.x > 0 && Math.abs(data.y) >= 75) {
        card.current.style.left = "150%";
        likeOrNope = "like";
      } else if (data.x < 0 && Math.abs(data.y) >= 75) {
        card.current.style.left = "-150%";
        likeOrNope = "nope";
      }

      // Delete swiped card
      setTimeout(() => cardWrap.current.remove(), 200);

      // React by Like or Nope
      await swipeCardBy(userInfo, card.current.id, likeOrNope);

      // If match, create chat room and register chat room users
      if (likeOrNope === "like") createChatRoomBy(userInfo, card.current.id);

      // If finished, show Empty
      if (cards.length == index + 1)
        setTimeout(() => setCardIsEmpty(true), 200);
      else setTimeout(() => dispatch(offBlock()), 300);
    }
  };

  useEffect(() => {
    if (!userInfo) history.push("/login");
    else if (!user) dispatch(getUserDetails());
  }, [dispatch, history, userInfo, user]);

  useEffect(() => {
    if (userInfo) dispatch(listCards());
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (loading === false && cards && cards.length === 0) setCardIsEmpty(true);
  }, [loading, cards, setCardIsEmpty]);

  useEffect(() => {
    if (cards && cards.length > 0) dispatch(offBlock());
  }, [cards, dispatch]);

  return (
    <Box>
      <CommonHeader recs />

      <CssBaseline />

      {cardIsEmpty || loading ? (
        <Empty />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        cards &&
        cards.length > 0 && (
          <SwipeableCards
            onTouchStart={swipeStart}
            onTouchMove={swipeMove}
            onTouchEnd={swipeEnd}
            ref={ref}
          />
        )
      )}

      {cards && <SwipeButtons onClick={clickSwipeButton} />}
    </Box>
  );
};

export default RecsScreen;
