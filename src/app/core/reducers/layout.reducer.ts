import { LayoutActions } from '@lbk/core/actions';
import { createReducer, on } from '@ngrx/store';

export const layoutFeatureKey = 'layout';

export interface State {
  showTopNavMobile: boolean;
}

const initialState: State = {
  showTopNavMobile: false,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.closeTopNavMobile, (_) => ({ showTopNavMobile: false })),
  on(LayoutActions.openTopNavMobile, (_) => ({ showTopNavMobile: true }))
);

export const selectShowTopNavMobile = (state: State) => state.showTopNavMobile;
