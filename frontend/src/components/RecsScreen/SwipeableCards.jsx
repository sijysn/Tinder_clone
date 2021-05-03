import React, { useState, useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";

import SwipeableCard from "./SwipeableCard";

const SwipeableCards = forwardRef(
  ({ onTouchStart, onTouchMove, onTouchEnd }, ref) => {
    const [creatingRef, setCreatingRef] = useState(true);

    const cardList = useSelector((state) => state.cardList);
    const { cards } = cardList;

    useEffect(() => {
      if (!ref) return;

      cards.map((_, index) => (ref.current[index] = React.createRef(null)));

      setCreatingRef(false);
    }, [cards, ref]);

    return (
      <Box>
        {!creatingRef && (
          <Box className="cards">
            {cards.map((person, index) => (
              <SwipeableCard
                key={person.id}
                person={person}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                index={index}
                ref={ref.current[index]}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  }
);

export default SwipeableCards;
