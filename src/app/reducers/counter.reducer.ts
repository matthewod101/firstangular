import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => ({ current: state.current + 1 })),
  on(actions.countDecremented, (state) => ({ current: state.current - 1 })),
  on(actions.countReset, () => ({ current: 0 }))
);

export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  return myReducer(currentState, action);
}
