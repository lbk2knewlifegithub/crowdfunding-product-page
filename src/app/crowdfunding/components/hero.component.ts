import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'lbk-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section @fadeInOnEnter>
      <!-- hero mobile -->
      <img
        class="w-full object-cover object-center aspect-[16/12] max-h-[400px] lg:hidden"
        src="assets/images/image-hero-mobile.jpg"
        alt="Hero"
      />
      <!-- end hero mobile -->

      <!-- hero desktop -->
      <img
        class="hidden w-full object-cover object-center aspect-[16/14] max-h-[450px] lg:block"
        src="assets/images/image-hero-desktop.jpg"
        alt="Hero"
      />
      <!-- end hero desktop -->
    </section>
  `,
  animations: [fadeInOnEnterAnimation()],
})
export class HeroComponent {}
