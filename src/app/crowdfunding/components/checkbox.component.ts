import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [ngClass]="{ 'border-gray-300': checked }"
      class="duration-300 w-6 h-6 border border-primary rounded-full grid place-content-center"
    >
      <!-- ball -->
      <div
        [ngClass]="{ '!opacity-100': checked }"
        class="duration-300 opacity-0 w-3 h-3 bg-primary rounded-full"
      ></div>
      <!-- end ball -->
    </button>
  `,
})
export class CheckboxComponent {
  @Input() checked!: boolean;
}
