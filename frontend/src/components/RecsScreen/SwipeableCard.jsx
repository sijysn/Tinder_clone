import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useDispatch } from "react-redux";
import Draggable from "react-draggable";

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

import { onBlock, offBlock } from "../../actions/blockActions";

const SwipeableCard = forwardRef(
  ({ person, onTouchStart, onTouchMove, onTouchEnd, index }, ref) => {
    const classes = useStyles();

    const [selfIntroIsDisplayed, setSelfIntroIsDisplayed] = useState(false);

    const age = person.birth_date ? calcAge(person.birth_date) : "-";

    const dispatch = useDispatch();

    const readMore = (e) => {
      e.stopPropagation();

      if (!selfIntroIsDisplayed) {
        dispatch(onBlock());
        setSelfIntroIsDisplayed(true);
      } else {
        setSelfIntroIsDisplayed(false);
        dispatch(offBlock());
      }
    };

    const cardRef = useRef(null);
    const cardWrapRef = useRef(null);
    const readMoreRef = useRef(null);
    const likeRef = useRef(null);
    const nopeRef = useRef(null);

    const swipeStart = (e) => onTouchStart(e, selfIntroIsDisplayed);

    const swipeMove = (e, data) =>
      onTouchMove(e, data, cardRef, likeRef, nopeRef, selfIntroIsDisplayed);

    const swipeEnd = (e, data) =>
      onTouchEnd(
        e,
        data,
        cardWrapRef,
        cardRef,
        likeRef,
        nopeRef,
        selfIntroIsDisplayed,
        index
      );

    useEffect(() => {
      readMoreRef.current.addEventListener("mousedown", readMore, {
        passive: false,
      });
      readMoreRef.current.addEventListener("touchstart", readMore, {
        passive: false,
      });
    }, []);

    useEffect(() => {
      if (!ref || !cardWrapRef || !cardRef || !likeRef || !nopeRef) return;

      ref.current = {
        cardWrapRef,
        cardRef,
        likeRef,
        nopeRef,
      };
    }, [ref, cardWrapRef, cardRef, likeRef, nopeRef]);

    return (
      <Draggable
        onStart={swipeStart}
        onDrag={swipeMove}
        onStop={swipeEnd}
        disabled={selfIntroIsDisplayed}
      >
        <Box component="span" className="card-wrapper" ref={cardWrapRef}>
          <Card className="card" ref={cardRef} id={person.id}>
            <CardMedia
              image={
                person.image
                  ? person.image
                  : "https://res.cloudinary.com/dfw3mlaic/image/upload/v1/images/unknown_ffqtxf"
              }
              className={classes.cardImage}
              title="profile photo"
            />
            <Typography
              component="span"
              variant="h3"
              className="card__like"
              ref={likeRef}
            >
              LIKE
            </Typography>
            <Typography
              component="span"
              variant="h3"
              className="card__nope"
              ref={nopeRef}
            >
              NOPE
            </Typography>

            <CardActionArea ref={readMoreRef}>
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
                        <i className="fas fa-graduation-cap"></i>{" "}
                        {person.profession}
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
                            onClick={readMore}
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
        </Box>
      </Draggable>
    );
  }
);

export default SwipeableCard;
