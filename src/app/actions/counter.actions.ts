import { createAction } from '@ngrx/store';

export const countIncremented = createAction(
  '[counter] increment'
);

export const countDecremented = createAction(
  '[counter] decrement'
);

export const countReset = createAction(
  '[counter] reset'
);
