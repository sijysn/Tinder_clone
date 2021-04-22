import {
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
  CARD_LIST_FAIL,
  CARD_LIST_RESET,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_DETAILS_UPDATE_RESET,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_RESET,
  NEW_MATCHES_LIST_REQUEST,
  NEW_MATCHES_LIST_SUCCESS,
  NEW_MATCHES_LIST_FAIL,
  NEW_MATCHES_LIST_RESET,
  LIKES_LIST_REQUEST,
  LIKES_LIST_SUCCESS,
  LIKES_LIST_FAIL,
  LIKES_LIST_RESET,
} from "../constants/userConstants";

export const cardListReducers = (state = { cards: [] }, action) => {
  switch (action.type) {
    case CARD_LIST_REQUEST:
      return { loading: true };

    case CARD_LIST_SUCCESS:
      return { loading: false, cards: action.payload };

    case CARD_LIST_FAIL:
      return { loading: false, error: action.payload };

    case CARD_LIST_RESET:
      return { cards: [] };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case USER_REGISTER_RESET:
      return {};

    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };

    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case USER_DETAILS_RESET:
      return {};

    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return { loading: true };

    case USER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_PROFILE_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};

export const userUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case USER_DETAILS_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_DETAILS_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};

export const newMatchesListReducers = (state = {}, action) => {
  switch (action.type) {
    case NEW_MATCHES_LIST_REQUEST:
      return { loading: true };

    case NEW_MATCHES_LIST_SUCCESS:
      return { loading: false, matches: action.payload };

    case NEW_MATCHES_LIST_FAIL:
      return { loading: false, error: action.payload };

    case NEW_MATCHES_LIST_RESET:
      return {};

    default:
      return state;
  }
};

export const likesListReducers = (state = { likes: [] }, action) => {
  switch (action.type) {
    case LIKES_LIST_REQUEST:
      return { loading: true };

    case LIKES_LIST_SUCCESS:
      return { loading: false, likes: action.payload };

    case LIKES_LIST_FAIL:
      return { loading: false, error: action.payload };

    case LIKES_LIST_RESET:
      return { likes: [] };

    default:
      return state;
  }
};
