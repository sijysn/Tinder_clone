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

import { useStyles } from "../../styles";

import calcAge from "../../functions/calcAge";
import createChatRoom from "../../functions/createChatRoom";

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

  const readMore = () => {
    if (isBlocked) return;

    if (!selfIntroIsDisplayed) {
      setSelfIntroIsDisplayed(true);
      dispatch(onBlock());
    }
  };

  const readLess = (e) => {
    if (isBlocked) return;

    if (selfIntroIsDisplayed) {
      setSelfIntroIsDisplayed(false);
      e.stopPropagation();
    }
  };

  const [swipedUser, setSwipedUser] = useState();
  const [nextUser, setNextUser] = useState();
  const [like, setLike] = useState();
  const [nope, setNope] = useState();

  var startX;
  var startY;
  var moveX;
  var moveY;
  var distanceX;
  var distanceY;

  const mdown = useCallback(
    (e) => {
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
      document.body.addEventListener("mousemove", mmove, false);
      document.body.addEventListener("touchmove", mmove, false);
    },
    [dispatch, swipedUser]
  );

  const mmove = useCallback(
    (e) => {
      // Normalize mouse and touch
      if (e.type === "mousemove") {
        var event = e;
      } else {
        var event = e.changedTouches[0];
      }

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
      if (distanceX >= 0) {
        like.style.opacity = distanceX / 100;
      } else {
        nope.style.opacity = -distanceX / 100;
      }

      // Occur when mouse or touch is left
      swipedUser.addEventListener("mouseup", mup, false);
      document.body.addEventListener("mouseleave", mup, false);
      swipedUser.addEventListener("touchend", mup, false);
      document.body.addEventListener("touchleave", mup, false);
    },
    [swipedUser, like, nope]
  );

  const mup = useCallback(async () => {
    if (Math.abs(distanceX) < 75 && Math.abs(distanceY) < 75) {
      swipedUser.style.left = 0;
      swipedUser.style.top = 0;
      swipedUser.style.transform = "rotate(0)";
      like.style.opacity = 0;
      nope.style.opacity = 0;

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

      // Delete event listers

      document.body.removeEventListener("mousemove", mmove, false);
      swipedUser.removeEventListener("mouseup", mup, false);
      document.body.removeEventListener("touchmove", mmove, false);
      swipedUser.removeEventListener("touchend", mup, false);

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
      if (likeOrNope === "like") {
        createChatRoom(userInfo.id, swipedUser.id, config);
      }

      // If all Cards have been swiped, show Empty component
      if (nextUser === null) {
        setTimeout(() => cardIsEmpty(), 200);
        dispatch(onBlock());
      } else {
        setTimeout(() => dispatch(offBlock()), 500);
      }
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
  }, []);

  useEffect(() => {
    if (!swipedUser) return;

    // When self introduction is displayed, not allow user to swipe
    if (selfIntroIsDisplayed) {
      document.body.removeEventListener("mousemove", mmove, false);
      document.body.removeEventListener("touchmove", mmove, false);
      document.body.removeEventListener("mouseleave", mup, false);
      document.body.removeEventListener("touchleave", mup, false);
    }

    // When blocked, delete event
    if (isBlocked) {
      swipedUser.removeEventListener("mousedown", mdown, false);
      swipedUser.removeEventListener("touchstart", mdown, false);
    }

    // When not blocked and self introduction is not displayed, allow user to swipe
    if (!isBlocked && !selfIntroIsDisplayed) {
      swipedUser.addEventListener("mousedown", mdown, false);
      swipedUser.addEventListener("touchstart", mdown, false);
    }
  }, [swipedUser, isBlocked, selfIntroIsDisplayed, mdown, mmove, mdown]);

  return (
    <Card className={className} id={person.id}>
      <CardMedia
        image={person.image ? person.image : "/images/unknown.png"}
        className={classes.cardImage}
        title="profile photo"
      />
      <Typography component="span" variant="h3" className="card__like">
        LIKE
      </Typography>
      <Typography component="span" variant="h3" className="card__nope">
        NOPE
      </Typography>

      <CardActionArea onClick={readMore}>
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
              <Box component="div" textAlign="right">
                {selfIntroIsDisplayed ? (
                  <IconButton
                    style={{
                      backgroundColor: "#f50057",
                    }}
                    component="span"
                    onClick={(e) => readLess(e)}
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
