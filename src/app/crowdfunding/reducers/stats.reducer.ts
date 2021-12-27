import { CrowdfundingApiActions } from '@lbk/crowdfunding/actions';
import { Stats } from '@lbk/crowdfunding/models';
import { createReducer, on } from '@ngrx/store';

export const statsFeatureKey = 'stats';

export interface State {
  stats?: Stats;
}

const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(CrowdfundingApiActions.loadStatsSuccess, (state, { stats }) => ({
    ...state,
    stats,
  }))
);

export const getStats = (state: State) => state.stats;
