import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authAction";

const reducer2 = createReducer(
  { x: 0 },
  {
    [authActions.actionCreator2]: (state, action) => ({
      x: state.x + action.payload,
    }),
  },
);

export default { reducer2 };
