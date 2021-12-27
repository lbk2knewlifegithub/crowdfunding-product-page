import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-thanks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid gap-4 place-items-center text-center py-4 md:gap-6">
      <div>
        <img src="assets/images/icon-check.svg" alt="Check" />
      </div>

      <h3 class="font-bold text-lg">Thanks for your support!</h3>

      <p class="text-muted text-sm">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>

      <button class="btn btn-primary mt-2">Got it</button>
    </div>
  `,
})
export class ThanksComponent {}
