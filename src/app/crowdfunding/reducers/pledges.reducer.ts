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
  }))
);

export const getPledges = (state: State) => state.pledges;
