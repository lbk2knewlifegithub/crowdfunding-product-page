import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Pledge } from '../../models';

@Component({
  selector: 'lbk-pledge-modal',
  templateUrl: './pledge-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PledgeModalComponent {
  @Input() pledge!: Pledge;
  @Input() checked!: boolean;
  @Output() onCheck = new EventEmitter<void>();
  @Output() pledged = new EventEmitter<Pledge>();

  get isOutOfStock(): boolean {
    return this.pledge.left <= 0;
  }

  onPledged(amount: number) {
    this.pledged.emit({
      ...this.pledge,
      amount,
    });
  }

  get showEnterPledge(): boolean {
    return this.checked && !this.isOutOfStock;
  }

  get showLeft(): boolean {
    return this.pledge.name !== 'Pledge with no reward';
  }

  get isDefaultPledge(): boolean {
    return this.pledge.name === 'Pledge with no reward';
  }

  get disabled(): boolean {
    return !this.isDefaultPledge && this.isOutOfStock;
  }

  get ngClass(): any {
    return {
      'border-2 border-primary': this.checked,
      'opacity-50 pointer-events-none': this.disabled,
    };
  }
}
