import { BLOCK_ON, BLOCK_OFF } from "../constants/blockConstants";

export const onBlock = () => (dispatch) => {
  dispatch({ type: BLOCK_ON });
};

export const offBlock = () => (dispatch) => {
  dispatch({ type: BLOCK_OFF });
};
