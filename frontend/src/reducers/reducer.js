import { combineReducers } from "redux";

import {
  cardListReducers,
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateDetailsReducer,
  userUpdateProfileReducer,
  newMatchesListReducers,
  likesListReducers,
} from "./userReducers";
import { blockReducer } from "./blockReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateDetails: userUpdateDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  cardList: cardListReducers,
  newMatchesList: newMatchesListReducers,
  likesList: likesListReducers,
  isBlocked: blockReducer,
});

export default reducer;
