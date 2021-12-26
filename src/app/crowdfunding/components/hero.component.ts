import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <img class="w-full object-cover object-center aspect-[16/12] md:aspect-video" src="assets/images/image-hero-mobile.jpg" alt="Hero" />
    </section>
  `,
})
export class HeroComponent {}
