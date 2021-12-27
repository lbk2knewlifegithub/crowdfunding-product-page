import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pledge } from '../../models';

@Component({
  selector: 'lbk-pledges-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-xl">Back this project</h3>

          <button>
            <span class="fa fa-times text-muted text-xl"></span>
          </button>
        </div>

        <p class="text-muted">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world!
        </p>
      </div>

      <!--    pledges-->
      <div class="grid gap-6 mt-10">
        <ng-container *ngFor="let pledge of pledges">
          <lbk-pledge-preview [pledge]="pledge"></lbk-pledge-preview>
        </ng-container>
      </div>
      <!--    end pledges-->
    </div>
  `,
})
export class PledgesDialogComponent {
  @Input() pledges!: Pledge[];
}
