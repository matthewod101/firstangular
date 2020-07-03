import { createAction } from '@ngrx/store';

export const applicationStarted = createAction(
  '[app] application started'
);

export const clearError = createAction(
  '[app] clear error'
);
