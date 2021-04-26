import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import useStyles from "../../styles/styles.js";

import calcAge from "../../repositories/calcAge";
import createChatRoom from "../../repositories/createChatRoom";

import { onBlock, offBlock } from "../../actions/blockActions";

const SwipeableCard = ({ person, className, cardIsEmpty }) => {
  const classes = useStyles();

  const [selfIntroIsDisplayed, setSelfIntroIsDisplayed] = useState(false);

  const age = person.birth_date ? calcAge(person.birth_date) : "-";

  const isBlocked = useSelector((state) => state.isBlocked);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const readMore = (e) => {
    e.preventDefault();
    if (isBlocked) return;
    e.stopPropagation();

    if (!selfIntroIsDisplayed) {
      setSelfIntroIsDisplayed(true);
      dispatch(onBlock());
    }
  };

  const readLess = (e) => {
    e.preventDefault();
    if (selfIntroIsDisplayed) {
      setSelfIntroIsDisplayed(false);
      e.stopPropagation();
      dispatch(offBlock());
    }
  };

  const [swipedUser, setSwipedUser] = useState();
  const [nextUser, setNextUser] = useState();
  const [like, setLike] = useState();
  const [nope, setNope] = useState();
  const [readMoreArea, setReadMoreArea] = useState();
  const [readLessArea, setReadLessArea] = useState();

  var startX;
  var startY;
  var moveX;
  var moveY;
  var distanceX;
  var distanceY;

  const swipeStart = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(onBlock());

      // Add class "drag" to card
      swipedUser.classList.add("drag");

      // Normalize mouse and touch
      if (e.type === "mousedown") {
        var event = e;
      } else {
        var event = e.changedTouches[0];
      }

      // Get location where card starts to move
      startX = event.pageX;
      startY = event.pageY;

      // Occur when card moves
      swipedUser.addEventListener("mousemove", swipeMove, false);
      swipedUser.addEventListener("touchmove", swipeMove, false);
    },
    [dispatch, swipedUser]
  );

  const swipeMove = useCallback(
    (e) => {
      if (isBlocked) return;

      // Normalize mouse and touch
      if (e.type === "mousemove") var event = e;
      else var event = e.changedTouches[0];

      // Move card to where mouse is
      moveY = event.pageY;
      moveX = event.pageX;

      distanceX = moveX - startX;
      distanceY = moveY - startY;

      swipedUser.style.top = distanceY + "px";
      swipedUser.style.left = distanceX + "px";

      // Rotate card as distanceX gets longer
      const rotate = distanceX / 10;
      swipedUser.style.transform = `rotate(${rotate}deg)`;

      // Display card more clearly as distanceX gets longer
      if (distanceX >= 0) like.style.opacity = distanceX / 100;
      else nope.style.opacity = -distanceX / 100;

      // Occur when mouse or touch is left
      swipedUser.addEventListener("mouseup", swipeEnd, false);
      swipedUser.addEventListener("touchend", swipeEnd, false);
    },
    [swipedUser, like, nope]
  );

  const swipeEnd = useCallback(async () => {
    if (Math.abs(distanceX) < 75 && Math.abs(distanceY) < 75) {
      swipedUser.style.left = 0;
      swipedUser.style.top = 0;
      swipedUser.style.transform = "rotate(0)";
      like.style.opacity = 0;
      nope.style.opacity = 0;

      // Delete event listeners
      swipedUser.removeEventListener("mousemove", swipeMove, false);
      swipedUser.removeEventListener("mouseup", swipeEnd, false);
      swipedUser.removeEventListener("touchmove", swipeMove, false);
      swipedUser.removeEventListener("touchend", swipeEnd, false);

      // Delete class "drag"
      swipedUser.classList.remove("drag");

      dispatch(offBlock());
    } else {
      // Mark card as "like" or "nope" based on distance
      let likeOrNope;
      if (distanceX >= 75) {
        swipedUser.style.left = "150%";
        likeOrNope = "like";
      } else if (distanceX <= -75) {
        swipedUser.style.left = "-150%";
        likeOrNope = "nope";
      } else if (distanceX > 0 && Math.abs(distanceY) >= 75) {
        swipedUser.style.left = "150%";
        likeOrNope = "like";
      } else if (distanceX < 0 && Math.abs(distanceY) >= 75) {
        swipedUser.style.left = "-150%";
        likeOrNope = "nope";
      }

      // Delete event listeners
      swipedUser.removeEventListener("mousemove", swipeMove, false);
      swipedUser.removeEventListener("mouseup", swipeEnd, false);
      swipedUser.removeEventListener("touchmove", swipeMove, false);
      swipedUser.removeEventListener("touchend", swipeEnd, false);

      // Delete class "drag"
      swipedUser.classList.remove("drag");

      // Delete swiped card
      setTimeout(() => swipedUser.remove(), 200);

      // React by Like or Nope
      await axios.post(
        "/api/reactions/swipe/",
        {
          fromUserId: userInfo.id,
          toUserId: Number(swipedUser.id),
          status: likeOrNope === "like" ? "L" : "N",
        },
        config
      );

      // If match, create chat room and register chat room users
      if (likeOrNope === "like")
        createChatRoom(userInfo.id, swipedUser.id, config);

      // If all Cards have been swiped, show Empty component
      if (nextUser === null) {
        setTimeout(() => cardIsEmpty(), 200);
        dispatch(onBlock());
      } else setTimeout(() => dispatch(offBlock()), 500);
    }
  }, [dispatch, swipedUser]);

  useEffect(() => {
    setSwipedUser(document.getElementById(person.id));
    setNextUser(document.getElementById(person.id).nextElementSibling);
    setLike(document.getElementById(person.id).firstChild.nextElementSibling);
    setNope(
      document.getElementById(person.id).firstChild.nextElementSibling
        .nextElementSibling
    );
    setReadMoreArea(document.getElementById(`read-more${person.id}`));
    setReadLessArea(document.getElementById(`read-less${person.id}`));
  }, []);

  useEffect(() => {
    // first rendering
    if (!swipedUser) return;

    swipedUser.addEventListener("mousedown", swipeStart, false);
    swipedUser.addEventListener("touchstart", swipeStart, false);
  }, [swipedUser, readMoreArea, readLessArea]);

  useEffect(() => {
    // first rendering
    if (!readMoreArea) return;

    readMoreArea.addEventListener("mousedown", readMore, false);
    readMoreArea.addEventListener("touchstart", readMore, false);
  }, [readMoreArea, readMore]);

  useEffect(() => {
    // first rendering
    if (!readLessArea) return;
    readLessArea.addEventListener("mousedown", readLess, false);
    readLessArea.addEventListener("touchstart", readLess, false);
  }, [readLessArea, readLess]);

  useEffect(() => {
    if (!swipedUser) return;

    // When blocked, do not allow user to swipe
    if (isBlocked) {
      swipedUser.removeEventListener("mousedown", swipeStart, false);
      swipedUser.removeEventListener("touchstart", swipeStart, false);
    } else {
      swipedUser.addEventListener("mousedown", swipeStart, false);
      swipedUser.addEventListener("touchstart", swipeStart, false);
    }
  }, [swipedUser, isBlocked]);

  useEffect(() => {
    if (!swipedUser) return;

    // When self introduction is displayed, do not allow user to swipe
    if (selfIntroIsDisplayed && readMoreArea) {
      swipedUser.removeEventListener("mousedown", swipeStart, false);
      swipedUser.removeEventListener("touchstart", swipeStart, false);
      readMoreArea.removeEventListener("mousedown", readMore, false);
      readMoreArea.removeEventListener("touchstart", readMore, false);
    } else if (!selfIntroIsDisplayed && readLessArea) {
      swipedUser.addEventListener("mousedown", swipeStart, false);
      swipedUser.addEventListener("touchstart", swipeStart, false);
      readLessArea.removeEventListener("mousedown", readLess, false);
      readLessArea.removeEventListener("touchstart", readLess, false);
    }
  }, [
    swipedUser,
    selfIntroIsDisplayed,
    readLessArea,
    readMoreArea,
    readLess,
    readMore,
  ]);

  return (
    <Card className={className} id={person.id}>
      <CardMedia
        image={
          person.image
            ? person.image
            : "https://res.cloudinary.com/dfw3mlaic/image/upload/v1/images/unknown_ffqtxf"
        }
        className={classes.cardImage}
        title="profile photo"
      />
      <Typography component="span" variant="h3" className="card__like">
        LIKE
      </Typography>
      <Typography component="span" variant="h3" className="card__nope">
        NOPE
      </Typography>

      <CardActionArea id={`read-more${person.id}`}>
        <CardContent className={classes.cardContent}>
          <Typography component="h1" variant="h3" gutterBottom>
            <strong>{person.first_name}</strong>{" "}
            <Typography component="span" variant="h4">
              {age}
            </Typography>
          </Typography>

          <Grid container alignItems="center">
            <Grid item xs={6}>
              {person.profession && (
                <Typography component="h2" variant="h6" gutterBottom>
                  <i className="fas fa-graduation-cap"></i> {person.profession}
                </Typography>
              )}
            </Grid>

            <Grid item xs={6}>
              <Box textAlign="right">
                <Box
                  minWidth={0}
                  minHeight={0}
                  id={`read-less${person.id}`}
                  component="span"
                  display="inline-block"
                >
                  {selfIntroIsDisplayed ? (
                    <IconButton
                      style={{
                        backgroundColor: "#f50057",
                      }}
                      component="span"
                    >
                      <ArrowDownwardIcon
                        style={{
                          color: "#fff",
                        }}
                        fontSize="large"
                      />
                    </IconButton>
                  ) : (
                    <IconButton component="span">
                      <InfoIcon fontSize="large" />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>

          {selfIntroIsDisplayed && (
            <Box mt={1}>
              <Typography
                component="p"
                variant="h5"
                color="textSecondary"
                className={classes.cardDetail}
              >
                {person.self_introduction}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SwipeableCard;
