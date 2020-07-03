import { createReducer, on, Action } from '@ngrx/store';
import * as mediaActions from '../actions/media.actions';

export interface ErrorState {
  hasError: boolean;
  errorMessage: string;
}

const initialState: ErrorState = {
  hasError: false,
  errorMessage: null
};

const myReducer = createReducer(
  initialState,
  on(mediaActions.mediaAddedFailure, (s, a) => ({ hasError: true, errorMessage: a.message }))
);

export function reducers(state: ErrorState, action: Action): ErrorState {
  return myReducer(state, action);
}
