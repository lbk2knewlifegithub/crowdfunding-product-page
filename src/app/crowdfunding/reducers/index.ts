import * as fromBookmark from '@lbk/crowdfunding/reducers/bookmark.reducer';
import * as fromPledges from '@lbk/crowdfunding/reducers/pledges.reducer';
import * as fromStats from '@lbk/crowdfunding/reducers/stats.reducer';
import * as fromRoot from '@lbk/reducers';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export const crowdfundingFeatureKey = 'crowdfunding';

export interface CrowdfundingState {
  [fromStats.statsFeatureKey]: fromStats.State;
  [fromPledges.pledgesFeatureKey]: fromPledges.State;
  [fromBookmark.bookmarkFeatureKey]: fromBookmark.State;
}

export interface State extends fromRoot.State {
  [crowdfundingFeatureKey]: CrowdfundingState;
}

export function reducers(state: CrowdfundingState | undefined, action: Action) {
  return combineReducers({
    [fromPledges.pledgesFeatureKey]: fromPledges.reducer,
    [fromStats.statsFeatureKey]: fromStats.reducer,
    [fromBookmark.bookmarkFeatureKey]: fromBookmark.reducer,
  })(state, action);
}

/**
 * - Selectors
 */
export const selectCrowdfundingState = createFeatureSelector<CrowdfundingState>(
  crowdfundingFeatureKey
);

/**
 * - Pledges selector
 */
export const selectPledgesState = createSelector(
  selectCrowdfundingState,
  (state) => state.pledges
);

export const selectPledges = createSelector(
  selectPledgesState,
  fromPledges.getPledges
);

/**
 * - Stats selector
 */
export const selectStatsState = createSelector(
  selectCrowdfundingState,
  (state) => state.stats
);

export const selectStats = createSelector(selectStatsState, fromStats.getStats);

/**
 * - Bookmark selector
 */
export const selectBookmarkState = createSelector(
  selectCrowdfundingState,
  (state) => state.bookmark
);

export const selectBookmark = createSelector(
  selectBookmarkState,
  fromBookmark.getBookmark
);
