import { Pledge, Stats } from '@lbk/crowdfunding/models';
import { createAction, props } from '@ngrx/store';

/**
 * Load pledges action
 */
export const loadPledgesSuccess = createAction(
  '[Crowdfunding/API] Load Pledges Success',
  props<{ pledges: Pledge[] }>()
);
export const loadPledgesFailure = createAction(
  '[Crowdfunding/API] Load Pledges Failure',
  props<{ error: any }>()
);

/**
 * Load stats action
 */
export const loadStatsSuccess = createAction(
  '[Crowdfunding/API] Load Stats Success',
  props<{ stats: Stats }>()
);
export const loadStatsFailure = createAction(
  '[Crowdfunding/API] Load Stats Failure',
  props<{ error: any }>()
);

/**
 * Pledge action
 */
export const pledgeSuccess = createAction('[Crowdfunding/API] Pledge Success');
export const pledgeFailure = createAction(
  '[Crowdfunding/API] Pledge Failure',
  props<{ error: any }>()
);
