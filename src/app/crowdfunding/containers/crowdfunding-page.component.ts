import { Component } from '@angular/core';
import * as fromData from '@lbk/crowdfunding/data';
import { Pledge, Stats } from '@lbk/crowdfunding/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lbk-home',
  template: `
    <main>
      <lbk-hero></lbk-hero>

      <div class="container grid gap-8 mb-40">
        <lbk-project-riser class="block -mt-14 z-50"></lbk-project-riser>

        <lbk-stats *ngIf="stats$ | async as stats" [stats]="stats"></lbk-stats>

        <lbk-project-preview-list
          *ngIf="pledges$ | async as pledges"
          [pledges]="pledges"
        ></lbk-project-preview-list>
      </div>
    </main>
  `,
})
export class CrowdfundingPageComponent {
  pledges$: Observable<Pledge[]> = of(fromData.pledges);
  stats$: Observable<Stats> = of(fromData.stats);

  constructor() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
}
