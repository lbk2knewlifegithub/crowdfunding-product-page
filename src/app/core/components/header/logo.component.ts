import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--    logo-->
    <img src="/assets/images/logo.svg" alt="Logo" />
    <!--    end logo-->
  `,
})
export class LogoComponent {}
