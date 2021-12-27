import { CrowdfundingPageActions } from '@lbk/crowdfunding/actions';
import { createReducer, on } from '@ngrx/store';

export const bookmarkFeatureKey = 'bookmark';

export interface State {
  bookmarked: boolean;
}

const initialState: State = {
  bookmarked: true,
};

export const reducer = createReducer(
  initialState,
  on(CrowdfundingPageActions.setAsBookmark, (_) => ({ bookmarked: true, })),
  on(CrowdfundingPageActions.unBookmark, (_) => ({ bookmarked: false, })));

export const getBookmark = (state: State) => state.bookmarked;
