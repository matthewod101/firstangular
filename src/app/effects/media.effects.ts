import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as appActions from '../actions/app.actions';
import * as mediaActions from '../actions/media.actions';
import { HttpClient } from '@angular/common/http';
import { MediaEntity } from '../reducers/media.reducer';

@Injectable()
export class MediaEffects {

  // When mediaAdded -> Send it to the API -> mediaAddedSuccess
  addMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mediaActions.mediaAdded),
      map(a => a.payload), // { type: '[media] media added', payload: {} as MediaEntity } => MediaEntity
      switchMap((originalAction) => this.client.post<MediaEntity>('http://localhost:1337/media', {
        title: originalAction.title,
        recommendedBy: originalAction.recommendedBy,
        kind: originalAction.kind
      }).pipe(
        map(mediaFromServer => mediaActions.mediaAddedSuccess({ payload: mediaFromServer, oldId: originalAction.id })),
        catchError((response) => of(mediaActions.mediaAddedFailure({ payload: originalAction, message: 'Failed to add that' })))
      ))
    ), { dispatch: true }
  );

  // When applicationStarted -> goes to the API to get our media and dispatches a mediaLoaded action with that data.
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      // turn applicationStarted -> (api) -> mediaLoaded
      switchMap(() => this.client.get<{ data: MediaEntity[] }>('http://localhost:1337/media')
        .pipe(
          map(r => r.data),
          map(data => mediaActions.mediaLoaded({ payload: data }))
        )
      )
    ), { dispatch: true }
  );

  // logEverything$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ), { dispatch: false }
  // );
  constructor(private actions$: Actions, private client: HttpClient) { }
}
