/* eslint-disable import/no-anonymous-default-export */
import authAction from "./authAction";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },

  isExp(token) {
    let jwt = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    let expiration = (jwt && jwt.exp && jwt.exp * 1000) || null;

    let isExp = Date.now() > expiration;
    return isExp;
  },
};

// ============================================================================
// let jwt = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
// let expFull = (jwt && jwt.exp && jwt.exp * 1000) || null;

// let isExp = Date.now() > expFull;

// console.log(isExp);
// console.log(expFull);
//=============================================================================

const signUp = formData => dispatch => {
  dispatch(authAction.signUpRequest());
  axios({
    method: "post",
    url: "/users",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(resp => dispatch(authAction.signUpSuccess(resp.data)))
    .catch(err => dispatch(authAction.signUpError(err.response.data)));
};

const signIn = credentials => dispatch => {
  dispatch(authAction.signInRequest());
  axios({
    method: "post",
    url: "/users/signin",
    data: credentials,
    headers: { "Content-Type": "application/json" },
  })
    .then(resp => {
      token.set(resp.data.tokens.accessToken);
      console.log(999, axios.defaults.headers.common.Authorization);
      dispatch(authAction.signInSuccess(resp.data));
    })
    .catch(err => dispatch(authAction.signInError(err.response.data)));
};

const signOut = () => dispatch => {
  dispatch(authAction.signOutRequest());
  // console.log(11, axios.defaults.headers.common.Authorization);
  axios({
    method: "post",
    url: "/users/sign-out",
    // data: credentials,
    headers: { "Content-Type": "application/json" },
  })
    .then(resp => {
      token.unset();
      // console.log(resp.data); /////////
      dispatch(authAction.signOutSuccess());
    })
    .catch(err => dispatch(authAction.signOutError(err.response.data)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const { accessToken } = getState().tokens;
  // console.log(accessToken);
  if (!accessToken) return;

  token.set(accessToken);
  dispatch(authAction.getCurrentUserRequest());

  axios({
    method: "get",
    url: "/users/get-current",
    // data: credentials,
    headers: { "Content-Type": "application/json" },
  })
    .then(resp => {
      // console.log(resp.data); /////////
      dispatch(authAction.getCurrentUserSuccess(resp.data));
    })
    .catch(err => dispatch(authAction.getCurrentUserError(err.response.data)));
};

const getAllUsers = () => (dispatch, getState) => {
  dispatch(authAction.getAllUsersRequest());

  axios({
    method: "get",
    url: "/users/get-users",
    // data: credentials,
    headers: { "Content-Type": "application/json" },
  })
    .then(resp => {
      // console.log(resp.data); /////////
      dispatch(authAction.getAllUsersSuccess(resp.data));
    })
    .catch(err => dispatch(authAction.getAllUsersError(err.response.data)));
};

export default { signUp, signIn, signOut, getCurrentUser, getAllUsers };
