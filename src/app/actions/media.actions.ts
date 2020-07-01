import { createAction } from '@ngrx/store';
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
