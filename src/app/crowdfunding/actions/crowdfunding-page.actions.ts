import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Crowdfunding Page] Enter');

export const onBackThisProject = createAction(
  '[Crowdfunding Page] On Back This Project',
  props<{ id?: number }>()
);

export const openThanks = createAction('[Crowdfunding Page] Open Thanks');

export const setAsBookmark = createAction(
  '[Crowdfunding Page] Set As Bookmark'
);
export const unBookmark = createAction('[Crowdfunding Page] Un Bookmark');
