import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-process-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative h-4 rounded-full  bg-muted/20">
      <div
        [style.width]="width"
        class="absolute top-0 left-0 h-full bg-primary rounded-full"
      ></div>
    </div>
  `,
})
export class ProcessBarComponent {
  @Input() fill!: number; // %

  get width(): string {
    return `${Math.floor(this.fill * 100)}%`;
  }
}
