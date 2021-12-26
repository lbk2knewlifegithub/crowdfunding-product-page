import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '../models';

@Component({
  selector: 'lbk-project-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <article>
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a study and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>

        <p>
          Featuring craftsmanship, the simplicity of design creates extra desk
          space below your component to allow notepads, pen, and USB sticks to
          be stored under the stand.
        </p>
      </article>

      <!--    projects-->
      <div>
        <!-- <ng-container *ngFor="let project of projects">
          <lbk-project-card-reward
            (reward)="onReward(project)"
            [project]="project"
          ></lbk-project-card-reward>
        </ng-container> -->
      </div>
      <!--    end projects-->
    </section>
  `,
})
export class ProjectPreviewListComponent {
  @Input() projects!: Project[];
}
