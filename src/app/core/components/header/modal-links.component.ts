import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-modal-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="open">
      <nav>
        <lbk-logo></lbk-logo>

        <!--    close menu-->
        <img
          (click)="onMenu()"
          src="/assets/images/icon-close-menu.svg"
          alt="Close"
        />
        <!--    end close menu-->
      </nav>

      <!--      links-->
      <ul>
        <li><a routerLink="/">About</a></li>
        <li><a routerLink="/">Discover</a></li>
        <li><a routerLink="/">Get Started</a></li>
      </ul>
      <!--      end links-->
    </div>
    <!--end mobile navbar active-->
  `,
})
export class ModalLinksComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  onMenu() {}
}
