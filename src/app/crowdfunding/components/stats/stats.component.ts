import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Stats } from '../../models/stats.model';

@Component({
  selector: 'lbk-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  @Input() stats!: Stats;
}
