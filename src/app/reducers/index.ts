import * as fromCounter from './counter.reducer';
import * as fromMedia from './media.reducer';
import { createSelector } from '@ngrx/store';
import { MediaListItem } from '../models';

export interface AppState {
  counter: fromCounter.CounterState;
  media: fromMedia.MediaState;
}

export const reducers = {
  counter: fromCounter.reducer,
  media: fromMedia.reducer
};

// 1. (IF in a feature create a feature selector)
const selectState = (state: AppState) => state;
// 2. Create a selector that finds each "branch" of the state.
const selectCounterBranch = createSelector(selectState, s => s.counter);
const selectMediaBranch = createSelector(selectState, s => s.media);

// 3. Any helpers you might need.
const selectMediaEntityArray = fromMedia.adapter.getSelectors(selectMediaBranch).selectAll;
// 4. Selectors for the components.

// TODO: we need a selector function that returns a MediaListItem[] for our MeiaListComponent.
export const selectMediaListItemModel = createSelector(
  selectMediaEntityArray,
  media => media as MediaListItem[]
);
