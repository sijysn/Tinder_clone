import { BLOCK_ON, BLOCK_OFF } from "../constants/blockConstants";

export const blockReducer = (state = true, action) => {
  switch (action.type) {
    case BLOCK_ON:
      return true;

    case BLOCK_OFF:
      return false;

    default:
      return state;
  }
};
