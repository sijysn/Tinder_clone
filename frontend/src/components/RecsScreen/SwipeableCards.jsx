import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@material-ui/lab/Alert";

import SwipeableCard from "./SwipeableCard";
import Empty from "./Empty";

import { listCards } from "../../actions/userActions";

const SwipeableCards = ({ cardIsEmpty }) => {
  const dispatch = useDispatch();

  const cardList = useSelector((state) => state.cardList);
  const { loading, error, cards } = cardList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listCards());
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (loading === false && cards && cards.length === 0) cardIsEmpty();
  }, [cards, cardIsEmpty]);

  return (
    <div>
      {loading ? (
        <Empty />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        cards && (
          <div className="cards">
            {cards.map((person) => (
              <SwipeableCard
                person={person}
                className="card"
                key={person.id}
                cardIsEmpty={cardIsEmpty}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SwipeableCards;
