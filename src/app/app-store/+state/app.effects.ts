import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { FeedService } from '../services/feed.service';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  loadApps$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadApps),
      concatMap(() =>
        this.feedService.getAll().pipe(
          map(posts => AppActions.loadAppsSuccess({ posts })),
          catchError(error => of(AppActions.loadAppsFailure({ error })))
        )
      )
    );
  });

  loadResources$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadResources),
      concatMap(() =>
        this.feedService.getResources().pipe(
          map(resources => AppActions.loadResourcesSuccess({ resources })),
          catchError(error => of(AppActions.loadResourcesFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
