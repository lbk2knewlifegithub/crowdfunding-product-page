import { InjectionToken } from '@angular/core';
import * as fromLayout from '@lbk/core/reducers/layout.reducer';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

const rootToken = 'Root reducers token';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>(rootToken, {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectShowTopNavMobile = createSelector(
  selectLayoutState,
  fromLayout.selectShowTopNavMobile
);
