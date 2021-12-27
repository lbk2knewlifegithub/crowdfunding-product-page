import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Crowdfunding Page] Enter');

export const onBackThisProject = createAction(
  '[Crowdfunding Page] On Back This Project',
  props<{ id?: number }>()
);

export const openThanks = createAction('[Crowdfunding Page] Open Thanks');

export const closeThanks = createAction('[Crowdfunding Page] Close Thanks');

export const openPledges = createAction(
  '[Crowdfunding Page] Open Pledges Modal',
  props<{ id?: number }>()
);

export const closePledges = createAction(
  '[Crowdfunding Page] Close Pledges Modal'
);
