import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <img src="assets/images/image-hero-mobile.jpg" alt="Hero" />
    </section>
  `,
})
export class HeroComponent {}
