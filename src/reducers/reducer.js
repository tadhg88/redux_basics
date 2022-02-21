import { INCREMENT, DECREMENT } from "../actions/types";
import { fromJS } from "immutable";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

const initialState = {
  count: 0,
  user: fromJS({
    id: 2,
    name: "tim test",
  })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};