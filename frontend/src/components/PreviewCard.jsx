import React, { useState } from "react";

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

import useStyles from "../styles/styles.js";

import calcAge from "../repositories/calcAge";

function PreviewCard({ person, className }) {
  const classes = useStyles();

  const [selfIntroIsDisplayed, setSelfIntroIsDisplayed] = useState(false);

  const age = person.birth_date ? calcAge(person.birth_date) : "-";

  const readMore = () => {
    if (!selfIntroIsDisplayed) setSelfIntroIsDisplayed(true);
  };

  const readLess = (e) => {
    if (selfIntroIsDisplayed) {
      setSelfIntroIsDisplayed(false);
      e.stopPropagation();
    }
  };

  return (
    <Card className={className}>
      <CardMedia
        image={
          person.image
            ? person.image
            : "https://res.cloudinary.com/dfw3mlaic/image/upload/v1/images/unknown_ffqtxf"
        }
        className={classes.cardImage}
        title="profile photo"
      />

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
              <Box textAlign="right">
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
                id="self-introduction"
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
}

export default PreviewCard;
