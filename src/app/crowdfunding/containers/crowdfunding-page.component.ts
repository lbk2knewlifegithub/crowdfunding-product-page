import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pledge, Stats } from '@lbk/crowdfunding/models';
import * as fromCrowdfunding from '@lbk/crowdfunding/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CrowdfundingPageActions } from '../actions';

@Component({
  selector: 'lbk-home',
  template: `
    <main>
      <lbk-hero></lbk-hero>

      <div class="container grid gap-8 mb-40 max-w-4xl">
        <lbk-project-riser class="w-full -mt-14 z-20 md:-mt-16 lg:-mt-20">
        </lbk-project-riser>

        <lbk-stats *ngIf="stats$ | async as stats" [stats]="stats"></lbk-stats>

        <lbk-project-preview-list
          *ngIf="pledges$ | async as pledges"
          [pledges]="pledges"
        ></lbk-project-preview-list>
      </div>
    </main>
  `,
})
export class CrowdfundingPageComponent implements OnInit {
  pledges$!: Observable<Pledge[]>;
  stats$!: Observable<Stats | undefined>;

  constructor(public dialog: MatDialog, private readonly _store: Store) {
    this.pledges$ = this._store.select(fromCrowdfunding.selectPledges);
    this.stats$ = this._store.select(fromCrowdfunding.selectStats);
    // setTimeout(() => {
    //   window.scrollTo(0, document.body.scrollHeight);
    // }, 100);
    // let dialogRef = dialog.open(ThanksComponent, {
    //   panelClass: 'thanks-dialog',
    // });

    // let dialogRef = dialog.open(PledgesDialogComponent, {
    //   panelClass: 'pledges-dialog',
    // });
  }

  ngOnInit(): void {
    this._store.dispatch(CrowdfundingPageActions.enter());
  }
}
