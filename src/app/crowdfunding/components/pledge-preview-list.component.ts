import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pledge } from '../models';

@Component({
  selector: 'lbk-project-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="shadow-lg px-6 py-8 sm:px-10 sm:py-12">
      <!-- about -->
      <lbk-about-project></lbk-about-project>
      <!-- end about -->

      <!--    pledges-->
      <div class="grid gap-6 mt-10">
        <ng-container *ngFor="let pledge of pledges">
          <lbk-pledge-preview [pledge]="pledge"></lbk-pledge-preview>
        </ng-container>
      </div>
      <!--    end pledges-->
    </section>
  `,
})
export class PledgePreviewListComponent {
  @Input() pledges!: Pledge[];
}
