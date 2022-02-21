import { createSelector } from 'reselect';

export const selectCount = state => state && state.count;
export const selectUser = state => state && state.user;

export const selectUserId = createSelector(selectUser,
  user => user && user.get('id'),
);

/*
export const selectOpenYearsList = createSelector(
  selectOpenYears,
  openYears => openYears && openYears.get('list'),
);
*/