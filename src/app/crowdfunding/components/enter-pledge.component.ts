import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lbk-enter-pledge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="text-muted text-center text-sm ">Enter your pledge</p>

    <form class="flex items-center gap-4 mt-4" [formGroup]="formGroup">
      <div class="relative">
        <!-- dollar -->
        <span
          class="text-sm absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        >
          <span class="fa fa-dollar leading-3"></span>
        </span>
        <!-- end dollar -->

        <input
          formControlName="pledge"
          class="rounded-full font-black pl-7"
          type="number"
        />
      </div>

      <button [disabled]="formGroup.invalid" class="btn btn-primary px-6 text-sm shadow-none">Continue</button>
    </form>
  `,
})
export class EnterPledgeComponent implements OnInit {
  @Input() pledge!: number;
  @Output() pledgeChange = new EventEmitter<number>();

  formGroup!: FormGroup;

  constructor(private readonly _fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this._fb.group({
      pledge: [this.pledge, [Validators.min(this.pledge), Validators.required]],
    });
  }
}
