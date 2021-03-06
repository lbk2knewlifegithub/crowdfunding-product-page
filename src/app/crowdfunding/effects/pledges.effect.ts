import { Injectable } from '@angular/core';
import {
  CrowdfundingApiActions,
  CrowdfundingPageActions
} from '@lbk/crowdfunding/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, exhaustMap, map, of } from 'rxjs';
import { CrowdfundingService } from '../services/crowdfunding.service';
import { DialogService } from '../services/dialog.service';

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

  onBackThisProject$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CrowdfundingPageActions.onBackThisProject),
      exhaustMap(({ id }) =>
        this._dialogService.openPledgesDialog(id).pipe(
          map(({ id, amount }) => CrowdfundingApiActions.pledgeSuccess({ id, amount })),
          catchError((error) => of(CrowdfundingApiActions.pledgeFailure({ error })))
        )
      )
    )
  );

  openThanks$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(CrowdfundingPageActions.openThanks),
        debounceTime(300),
        map(() => this._dialogService.thankSupport())
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _pledgesService: CrowdfundingService,
    private readonly _dialogService: DialogService
  ) {}
}
