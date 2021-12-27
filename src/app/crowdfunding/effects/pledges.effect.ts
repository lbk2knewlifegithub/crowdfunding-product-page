import { Injectable } from '@angular/core';
import {
  CrowdfundingApiActions,
  CrowdfundingPageActions
} from '@lbk/crowdfunding/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CrowdfundingService } from '../services/crowdfunding.service';

@Injectable({ providedIn: 'root' })
export class PledgesEffects {
  loadPledges$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CrowdfundingPageActions.enter),
      exhaustMap(() =>
        this._pledgesService.getPledges().pipe(
          map((pledges) =>
            CrowdfundingApiActions.loadPledgesSuccess({ pledges })
          ),
          catchError((error) =>
            of(CrowdfundingApiActions.loadPledgesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _pledgesService: CrowdfundingService
  ) {}
}
