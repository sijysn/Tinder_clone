import axios from "axios";

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
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  NEW_MATCHES_LIST_REQUEST,
  NEW_MATCHES_LIST_SUCCESS,
  NEW_MATCHES_LIST_FAIL,
  NEW_MATCHES_LIST_RESET,
  LIKES_LIST_REQUEST,
  LIKES_LIST_SUCCESS,
  LIKES_LIST_FAIL,
  LIKES_LIST_RESET,
} from "../constants/userConstants";

import { BLOCK_ON } from "../constants/blockConstants";

export const listCards = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CARD_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `/api/users/cards/${userInfo.id}/`,
      config
    );

    dispatch({
      type: CARD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CARD_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login/",
      { username: email, password: password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: CARD_LIST_RESET });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: NEW_MATCHES_LIST_RESET });
  dispatch({ type: LIKES_LIST_RESET });
  dispatch({ type: BLOCK_ON });
  localStorage.removeItem("userInfo");
};

export const register = (
  name,
  email,
  password,
  genderIdentity,
  birthDate
) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register/",
      {
        name: name,
        email: email,
        password: password,
        genderIdentity: genderIdentity,
        birthDate: birthDate,
      },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_REGISTER_RESET });

    const loginData = await axios.post(
      "/api/users/login/",
      { username: email, password: password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: loginData.data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/profile/`, config);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateUserProfile = (name, email, password) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: USER_PROFILE_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      "/api/users/profile/update/",
      {
        name: name,
        email: email,
        password: password,
      },
      config
    );

    dispatch({ type: USER_PROFILE_UPDATE_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateUserDetails = (
  profession,
  selfIntroduction,
  genderIdentity,
  sexualPreference
) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      "/api/users/details/update/",
      {
        profession: profession,
        selfIntroduction: selfIntroduction,
        genderIdentity: genderIdentity,
        sexualPreference: sexualPreference,
      },
      config
    );

    dispatch({ type: USER_DETAILS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_DETAILS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getNewMatchesList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NEW_MATCHES_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Get ChatRoomUsers the user joins
    const newMatchesList = await axios.get(
      `/api/users/newmatches/${userInfo.id}/`,
      config
    );

    dispatch({
      type: NEW_MATCHES_LIST_SUCCESS,
      payload: newMatchesList.data,
    });
  } catch (error) {
    dispatch({
      type: NEW_MATCHES_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getLikesList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKES_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Get ChatRoomUsers the user joins
    const { data } = await axios.get(
      `/api/users/likes/${userInfo.id}/`,
      config
    );

    dispatch({
      type: LIKES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIKES_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
