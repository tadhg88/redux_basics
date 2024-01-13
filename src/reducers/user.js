import { SET_USER } from "../actions/actionTypes";

const initialState = {
  users: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('reducer', action);
        const { users } = action;
      return { ...state, users };
    default:
      return state;
  }
};