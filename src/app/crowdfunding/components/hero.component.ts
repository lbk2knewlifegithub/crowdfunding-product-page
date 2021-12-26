import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-large">
      <!-- hero mobile -->
      <img class="w-full object-cover object-center aspect-[16/12] max-h-[500px] lg:hidden" src="assets/images/image-hero-mobile.jpg" alt="Hero" />
      <!-- end hero mobile -->

      <!-- hero desktop -->
      <img class="hidden object-cover object-center aspect-[16/14] lg:block" src="assets/images/image-hero-desktop.jpg" alt="Hero" />
      <!-- end hero desktop -->
    </section>
  `,
})
export class HeroComponent {}
