import React from "react";
import { Link } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";

const CommonHeader = ({ recs, goldHome, matches, profile }) => {
  return (
    <div className="common-header">
      <div className="common-header__icons-container max-width">
        <Link to="/recs">
          <IconButton disabled className="common-header__icon">
            <img
              className="common-header__logo"
              src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
              alt="tinder logo"
              style={!recs ? { filter: "grayscale(100%)" } : null}
            />
          </IconButton>
        </Link>

        <Link to="/gold-home">
          <IconButton className="common-header__icon">
            <StarIcon
              fontSize="large"
              style={goldHome && { color: "#FF5864" }}
            />
          </IconButton>
        </Link>

        <Link to="/matches">
          <IconButton className="common-header__icon">
            <ForumIcon
              fontSize="large"
              style={matches && { color: "#FF5864" }}
            />
          </IconButton>
        </Link>

        <Link to="/profile">
          <IconButton className="common-header__icon">
            <PersonIcon
              fontSize="large"
              style={profile && { color: "#FF5864" }}
            />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default CommonHeader;
