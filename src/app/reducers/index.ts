import * as fromCounter from './counter.reducer';
import * as fromMedia from './media.reducer';
import * as fromErrors from './errors.reducer';
import { createSelector } from '@ngrx/store';
import { MediaListItem } from '../models';

export interface AppState {
  counter: fromCounter.CounterState;
  media: fromMedia.MediaState;
  errors: fromErrors.ErrorState;
}

export const reducers = {
  counter: fromCounter.reducer,
  media: fromMedia.reducer,
  errors: fromErrors.reducers
};

// 1. (IF in a feature create a feature selector)
const selectState = (state: AppState) => state;
// 2. Create a selector that finds each "branch" of the state.
const selectCounterBranch = createSelector(selectState, s => s.counter);
const selectMediaBranch = createSelector(selectState, s => s.media);
const selectErrorsBranch = createSelector(selectState, s => s.errors);
// 3. Any helpers you might need.
const selectMediaEntityArray = fromMedia.adapter.getSelectors(selectMediaBranch).selectAll;
// 4. Selectors for the components.

// TODO: we need a selector function that returns a MediaListItem[] for our MeiaListComponent.
export const selectMediaListItemModel = createSelector(
  selectMediaEntityArray,
  media => media.map(m => ({
    ...m,
    isTemporary: m.id.toString().startsWith('T')
  } as MediaListItem))
);

export const selectHasErrors = createSelector(
  selectErrorsBranch,
  b => b.hasError
);

export const selectErrorMessage = createSelector(
  selectErrorsBranch,
  b => b.errorMessage
);
