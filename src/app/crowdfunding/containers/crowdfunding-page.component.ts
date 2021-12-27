import { Component, OnInit } from '@angular/core';
import { Pledge, Stats } from '@lbk/crowdfunding/models';
import * as fromCrowdfunding from '@lbk/crowdfunding/reducers';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CrowdfundingPageActions } from '../actions';

@Component({
  selector: 'lbk-home',
  template: `
    <main>
      <lbk-hero></lbk-hero>

      <div class="container grid gap-8 mb-40 max-w-4xl">
        <lbk-project-riser
          (setAsBookmark)="onSetAsBookmark()"
          (unBookmark)="unBookmark()"
          (backThisProject)="onBackThisProject()"
          [bookmarked]="(bookmarked$ | async)!"
          class="w-full -mt-14 z-20 md:-mt-16 lg:-mt-20"
        >
        </lbk-project-riser>

        <lbk-stats *ngIf="stats$ | async as stats" [stats]="stats"></lbk-stats>

        <lbk-project-preview-list
          *ngIf="pledges$ | async as pledges"
          [pledges]="pledges"
          (reward)="onReward($event)"
        ></lbk-project-preview-list>
      </div>
    </main>
  `,
})
export class CrowdfundingPageComponent implements OnInit {
  pledges$!: Observable<Pledge[]>;
  stats$!: Observable<Stats | undefined>;
  bookmarked$!: Observable<boolean>;

  constructor(private readonly _store: Store) {
    this.pledges$ = this._store
      .select(fromCrowdfunding.selectPledges)
      // filter default pledge
      .pipe(map((pledges) => pledges.filter((pledge) => pledge.id !== 0)));

    this.stats$ = this._store.select(fromCrowdfunding.selectStats);

    this.bookmarked$ = this._store.select(fromCrowdfunding.selectBookmark);

    // setTimeout(() => {
    //   this.onBackThisProject();
    // }, 100);
  }

  ngOnInit(): void {
    this._store.dispatch(CrowdfundingPageActions.enter());
  }

  onBackThisProject(): void {
    this._store.dispatch(CrowdfundingPageActions.onBackThisProject({}));
  }

  onReward({ id }: Pledge) {
    this._store.dispatch(CrowdfundingPageActions.onBackThisProject({ id }));
  }

  onSetAsBookmark() {
    this._store.dispatch(CrowdfundingPageActions.setAsBookmark());
  }

  unBookmark() {
    this._store.dispatch(CrowdfundingPageActions.unBookmark());
  }
}
