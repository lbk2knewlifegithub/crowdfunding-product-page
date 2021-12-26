import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="text-white flex gap-10 font-bold xl:gap-14">
      <li>
        <a class="animate-link" routerLink="/">About</a>
      </li>
      <li>
        <a class="animate-link" routerLink="/">Discover</a>
      </li>
      <li>
        <a class="animate-link" routerLink="/">Get Started</a>
      </li>
    </ul>
  `,
})
export class LinksHeaderComponent {}
