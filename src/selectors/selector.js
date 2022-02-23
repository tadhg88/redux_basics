import { createSelector } from 'reselect';

export const selectCounter = state => state && state.counter.count;
export const selectUser = state => state && state.counter.user;

export const selectUserId = createSelector(selectUser,
  user => user && user.get('id'),
);