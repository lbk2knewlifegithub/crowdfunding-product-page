import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as fromCrowdfunding from '@lbk/crowdfunding/reducers';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { Pledge } from '../../models';

@Component({
  selector: 'lbk-pledges-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div mat-dialog-title class="space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-xl">Back this project</h3>

          <!-- close button -->
          <button>
            <span
              mat-dialog-close
              class="fa fa-times text-muted text-xl inline-block hover:animate-spin"
            ></span>
          </button>
          <!-- end close button -->
        </div>

        <p class="text-muted text-sm">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world!
        </p>
      </div>
      <div mat-dialog-content class="mt-10">
        <!--    pledges-->
        <div class="grid gap-6 ">
          <ng-container
            *ngFor="let pledge of pledges$ | async; trackBy: identifyPledge"
          >
            <lbk-pledge-modal
              (onCheck)="onCheck(pledge)"
              [checked]="(isChecked(pledge) | async)!"
              [pledge]="pledge"
            ></lbk-pledge-modal>
          </ng-container>
        </div>
        <!--    end pledges-->
      </div>
    </div>
  `,
})
export class PledgesDialogComponent implements OnInit {
  pledges$!: Observable<Pledge[]>;
  pledge$!: Observable<Pledge | undefined>;

  constructor(
    private readonly _store: Store,
    @Inject(MAT_DIALOG_DATA) private readonly data: { id?: number }
  ) {
    this.pledges$ = this._store.select(fromCrowdfunding.selectPledges);
    this.pledge$ = this.data.id
      ? this.pledges$.pipe(
          map((pledges) => pledges.find((pledge) => pledge.id === this.data.id))
        )
      : of(undefined);
  }

  ngOnInit(): void {}

  identifyPledge(index: number, pledge: Pledge) {
    return pledge.id;
  }

  isChecked(another: Pledge): Observable<boolean> {
    return this.pledge$.pipe(
      map((pledge) => !!pledge && pledge.id === another.id)
    );
  }

  onCheck(another: Pledge) {
    this.pledge$ = this.pledges$.pipe(
      map((pledges) => pledges.find((pledge) => pledge === another))
    );
  }
}
