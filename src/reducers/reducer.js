import { INCREMENT, DECREMENT, INCREMENT_BY, SET_TODO } from "../actions/actionTypes";
import { fromJS } from "immutable";

const initialState = {
  count: 0,
  user: fromJS({
    id: 2,
    name: "tim test",
  }),
  todo: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY:
      return {...state, count: state.count + action.payload};
    case SET_TODO:
      console.log('reducer', action);
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};