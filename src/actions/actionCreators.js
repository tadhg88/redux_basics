import { INCREMENT, DECREMENT, INCREMENT_BY } from "./actionTypes";
import { GET_USER, SET_USER, GET_TODO, SET_TODO } from "../actions/actionTypes";

export const increment = () => ({
    type: INCREMENT
});
  
export const decrement = () => ({
    type: DECREMENT
});

export const incrementBy = (value) => ({
    type: INCREMENT_BY,
    payload: value,
});

export const getUser = () => ({
    type: GET_USER,
  });
  
export const setUser = (users) => ({
    type: SET_USER,
    users,
});

export const getUserTodo = () => ({
    type: GET_TODO,
    payload: 1,
});

export const setUserTodo = (todo) => ({
    type: SET_TODO,
    payload: todo,
});