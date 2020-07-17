import * as types from "../Actions/actionTypes";
const initialState = [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PORTFOLIO:
      return action.payload;
    default:
      return state;
  }
};
export default myReducer;
