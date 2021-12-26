import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li>
        <a routerLink="/">About</a>
      </li>
      <li>
        <a routerLink="/">Discover</a>
      </li>
      <li>
        <a routerLink="/">Get Started</a>
      </li>
    </ul>
  `,
})
export class LinksHeaderComponent {}
