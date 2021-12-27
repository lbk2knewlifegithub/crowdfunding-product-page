import { Injectable } from '@angular/core';
import {
  CrowdfundingApiActions,
  CrowdfundingPageActions
} from '@lbk/crowdfunding/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CrowdfundingService } from '../services/crowdfunding.service';

@Injectable({ providedIn: 'root' })
export class StatsEffects {
  loadStats$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CrowdfundingPageActions.enter),
      exhaustMap(() =>
        this._crowdfundingService.getStats().pipe(
          map((stats) => CrowdfundingApiActions.loadStatsSuccess({ stats })),
          catchError((error) =>
            of(CrowdfundingApiActions.loadStatsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _crowdfundingService: CrowdfundingService
  ) {}
}
