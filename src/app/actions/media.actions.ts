import { createAction, props } from '@ngrx/store';
import { KindType } from '../models';
import { MediaEntity } from '../reducers/media.reducer';
import * as actions from '../actions/media.actions';

let id = 0;

export const mediaAdded = createAction(
  '[media] media added',
  ({ title, recommendedBy, kind }: { title: string, recommendedBy: string, kind: KindType }) => ({
    payload: {
      title,
      recommendedBy,
      kind,
      consumed: false,
      dateConsumed: null,
      id: 'T' + id++
    } as MediaEntity
  })
);

export const mediaRemoved = createAction(
  '[media] media removed',
  props<{ payload: MediaEntity }>()
);

export const mediaConsumed = createAction(
  '[media] media consumed',
  ({ media }: { media: MediaEntity }) => ({
    payload: {
      media,
      when: new Date() // Impure!
    }
  })
);
