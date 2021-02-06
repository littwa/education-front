/* eslint-disable import/no-anonymous-default-export */
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authAction";
import authOperation from "./authOperation";

const initState = {};

const user = createReducer(initState, {
  [authActions.signUpSuccess]: (state, action) => action.payload,
  [authActions.signInSuccess]: (state, action) => action.payload.user,
  [authActions.signOutSuccess]: (state, action) => initState,
  [authActions.getCurrentUserSuccess]: (state, action) => action.payload,
  [authActions.getCurrentUserError]: (state, action) => initState,
});
const tokens = createReducer(initState, {
  [authActions.signOutSuccess]: (state, action) => initState,
  [authActions.getCurrentUserError]: (state, action) => initState,
  [authActions.signInSuccess]: (state, action) => action.payload.tokens,
});
const isLoading = createReducer(false, {
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,

  [authActions.signInRequest]: () => true,
  [authActions.signInSuccess]: () => false,
  [authActions.signInError]: () => false,

  [authActions.signUpRequest]: () => true,
  [authActions.signUpSuccess]: () => false,
  [authActions.signUpError]: () => false,

  [authActions.signOutRequest]: () => true,
  [authActions.signOutSuccess]: () => false,
  [authActions.signOutError]: () => false,
});

const allUsers = createReducer([], {
  [authActions.getAllUsersSuccess]: (state, action) => action.payload,
});

export default { user, tokens, isLoading, allUsers };
