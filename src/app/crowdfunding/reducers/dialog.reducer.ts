import { CrowdfundingPageActions } from '@lbk/crowdfunding/actions';
import { createReducer, on } from '@ngrx/store';

export const dialogFeatureKey = 'dialog';

export interface State {
  showThanks: boolean;
  showPledges: boolean;
}

const initialState: State = {
  showThanks: false,
  showPledges: false,
};

export const reducer = createReducer(
  initialState,
  /**
   * - Thanks dialog
   */
  on(CrowdfundingPageActions.openThanks, (state) => ({
    ...state,
    showThanks: true,
  })),
  on(CrowdfundingPageActions.closeThanks, (state) => ({
    ...state,
    showThanks: false,
  })),
  /**
   * - Pledges dialog
   */
  on(CrowdfundingPageActions.openPledges, (state) => ({
    ...state,
    showPledges: true,
  })),
  on(CrowdfundingPageActions.closePledges, (state) => ({
    ...state,
    showPledges: false,
  }))
);

export const getShowThanks = (state: State) => state.showThanks;
export const getShowPledges = (state: State) => state.showPledges;
