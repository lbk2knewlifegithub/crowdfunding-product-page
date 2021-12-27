import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-about-project',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-6">
      <h3 class="font-black text-xl">About this project</h3>

      <div class="space-y-6 text-muted">
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
      </div>
    </div>
  `,
})
export class AboutProjectComponent {}
