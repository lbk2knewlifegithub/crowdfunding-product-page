import { CrowdfundingApiActions } from '@lbk/crowdfunding/actions';
import { Pledge } from '@lbk/crowdfunding/models';
import { createReducer, on } from '@ngrx/store';

export const pledgesFeatureKey = 'pledges';

export interface State {
  pledges: Pledge[];
}

const initialState: State = {
  pledges: [],
};

export const reducer = createReducer(
  initialState,
  on(CrowdfundingApiActions.loadPledgesSuccess, (state, { pledges }) => ({
    ...state,
    pledges,
  })),
  on(CrowdfundingApiActions.pledgeSuccess, (state, { id }) => {
    return {
      ...state,
      pledges: state.pledges.map((pledge) => ({
        ...pledge,
        left: pledge.id === id ? Math.max(pledge.left - 1) : pledge.left,
      })),
    };
  })
);

export const getPledges = (state: State) => state.pledges;
