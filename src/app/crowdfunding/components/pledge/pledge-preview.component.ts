import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Pledge } from '@lbk/crowdfunding/models';

@Component({
  selector: 'lbk-pledge-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [ngClass]="{ 'opacity-50 pointer-events-none': isOutOfStock }"
      class="py-7 px-6 border rounded-lg space-y-6"
    >
      <div class="grid md:grid-cols-2">
        <!-- name -->
        <h3 class="font-black text-lg">{{ pledge.name }}</h3>
        <!-- end name -->

        <!-- pledge amount -->
        <p class="text-primary font-semibold md:justify-self-end">
          Pledge {{ pledge.amount | currency }} or more
        </p>
        <!-- end pledge amount -->
      </div>

      <!-- description -->
      <p class="text-muted">{{ pledge.description }}</p>
      <!-- end description -->

      <div class="grid gap-4 md:grid-cols-2">
        <!-- left -->
        <div class="flex items-center gap-2">
          <span class="text-4xl font-black">{{ pledge.left }}</span>
          <span class="text-muted">left</span>
        </div>
        <!-- end left -->

        <lbk-select-reward-button
          (click)="reward.emit()"
          class="block md:justify-self-end"
          [available]="!isOutOfStock"
        ></lbk-select-reward-button>
      </div>
    </div>
  `,
})
export class PledgePreviewComponent {
  @Input() pledge!: Pledge;
  @Output() reward = new EventEmitter<void>();

  get isOutOfStock(): boolean {
    return this.pledge.left === 0;
  }
}
