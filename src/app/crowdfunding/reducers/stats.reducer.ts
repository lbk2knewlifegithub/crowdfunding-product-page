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
  })),
  on(CrowdfundingApiActions.pledgeSuccess, (state, { amount }) => {
    if(!state.stats) return state;
    if(!amount) return state;

    return {
      ...state,
      stats: {
        ...state.stats,
        pledged: state.stats.pledged + amount,
        backers: state.stats.backers + 1,
      }
    };
  })
);

export const getStats = (state: State) => state.stats;
