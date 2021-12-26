import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Stats } from '@lbk/crowdfunding/models';

@Component({
  selector: 'lbk-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() stats!: Stats;

  get fill(): number {
    return this.stats.pledged / this.stats.goal;
  }
}
