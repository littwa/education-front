import { configureStore } from "@reduxjs/toolkit";
import authReducrs from "./auth/authReducer";
import authAction from "./auth/authAction";
import { connect } from "react-redux";

export const store = configureStore({ reducer: { reducer2: authReducrs.reducer2 } });

const Component1 = ({ prop1, dispt1 }) => <button onClick={e => dispt1(3)}>{prop1}| +3</button>;

const mapStateToProps = state => ({ prop1: state.reducer2.x });
const mapDispatchToProps = { dispt1: authAction.actionCreator2 };
// const mapDispatchToProps = dispatch => ({ dispt1: val => dispatch(actionCreator1(val)) });

export const WithReduxComponent1 = connect(mapStateToProps, mapDispatchToProps)(Component1);

//===========================================================================

// import { createStore } from "redux";
// import { connect } from "react-redux";

// const actionCreator1 = value => ({ type: "action-test", payload: value });

// const reducer1 = (state = { x: 0 }, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "action-test":
//       return { x: state.x + action.payload };
//     default:
//       return state;
//   }
// };

// export const store = createStore(
//   reducer1,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// const Component1 = ({ prop1, dispt1 }) => <button onClick={e => dispt1(3)}>{prop1}| +3</button>;

// const mapStateToProps = state => ({ prop1: state.x });
// const mapDispatchToProps = { dispt1: actionCreator1 };
// // const mapDispatchToProps = dispatch => ({ dispt1: val => dispatch(actionCreator1(val)) });

// export const WithReduxComponent1 = connect(mapStateToProps, mapDispatchToProps)(Component1);
