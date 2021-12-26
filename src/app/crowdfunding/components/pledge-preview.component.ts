import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pledge } from '@lbk/crowdfunding/models';

@Component({
  selector: 'lbk-pledge-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [ngClass]="{ 'opacity-50 pointer-events-none': isOutOfStock }"
      class="py-7 px-6 border rounded-2xl space-y-6"
    >
      <div>
        <!-- name -->
        <h3 class="font-black text-lg">{{ pledge.name }}</h3>
        <!-- end name -->

        <!-- pledge amount -->
        <p class="text-primary font-semibold">
          Pledge {{ pledge.amount | currency }} or more
        </p>
        <!-- end pledge amount -->
      </div>

      <!-- description -->
      <p class="text-muted font-medium">{{ pledge.description }}</p>
      <!-- end description -->

      <!-- left -->
      <div class="flex items-center gap-4">
        <span class="text-4xl font-black">{{ pledge.left }}</span>
        <span class="text-muted">left</span>
      </div>
      <!-- end left -->

      <div>
        <a
          *ngIf="isOutOfStock; else selectReward"
          class="btn btn-secondary"
          routerLink="/"
          >Out of Stock</a
        >

        <ng-template #selectReward>
          <a class="btn btn-primary" routerLink="/">Select Reward</a>
        </ng-template>
      </div>
    </div>
  `,
})
export class PledgePreviewComponent {
  @Input() pledge!: Pledge;

  get isOutOfStock(): boolean {
    return this.pledge.left === 0;
  }
}
