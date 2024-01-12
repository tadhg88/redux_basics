import { createSelector } from 'reselect';

export const selectCounter = state => state && state.counterSlice.count;
export const selectUser = state => state && state.counterSlice.user;

export const selectUserId = createSelector(selectUser,
  user => user && user.get('id'),
);

export const selectCounterSlice = state => state && state.counterSlice;
export const selectUserSelector = createSelector(selectCounterSlice,
  state => state && state.user,
);
