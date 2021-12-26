import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-select-reward-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- select reward -->
    <a *ngIf="available; else outOfStock" class="btn btn-primary" routerLink="/"
      >Select Reward</a
    >
    <!-- end select reward -->

    <!-- out of stock -->
    <ng-template #outOfStock>
      <a class="btn btn-secondary" routerLink="/">Out of Stock</a>
    </ng-template>
    <!-- end out of stock -->
  `,
})
export class SelectRewardButtonComponent {
  @Input() available!: boolean;
}
