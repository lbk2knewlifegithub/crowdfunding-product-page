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
    <div
      class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center"
    >
      <p class="text-muted text-center text-sm sm:w-full sm:text-left">
        Enter your pledge
      </p>

      <form
        (ngSubmit)="onSubmit()"
        class="flex items-center gap-4 max-w-[240px]"
        [formGroup]="formGroup"
      >
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
            class="rounded-full font-black pl-7 text-right sm:w-[100px]"
            type="number"
          />
        </div>

        <button
          [disabled]="formGroup.invalid"
          class="btn btn-primary px-6 text-sm shadow-none"
        >
          Continue
        </button>
      </form>
    </div>
  `,
})
export class EnterPledgeComponent implements OnInit {
  @Input() pledge!: number;
  @Output() pledged = new EventEmitter<number>();

  formGroup!: FormGroup;

  constructor(private readonly _fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this._fb.group({
      pledge: [this.pledge, [Validators.min(this.pledge), Validators.required]],
    });
  }

  onSubmit() {
    this.pledged.emit(this.formGroup.value.pledge);
  }
}
