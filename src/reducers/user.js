import { GET_USER, SET_USER } from "../actions/actionTypes";

export const getUser = () => ({
  type: GET_USER
});

export const setUser = (users) => ({
  type: SET_USER,
  users,
});

const initialState = {
  users: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
        const { users } = action;
      return { ...state, users };
    default:
      return state;
  }
};