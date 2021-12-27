import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-pledge-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-2">
      <span class="text-2xl font-black lg:text-3xl">{{ left }}</span>
      <span class="text-muted">left</span>
    </div>
  `,
})
export class PledgeLeftComponent {
  @Input() left!: number;
}
