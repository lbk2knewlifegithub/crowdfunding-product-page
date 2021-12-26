import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Unsubscribe } from '@lbk/shared/components/unsubscribe.component';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  zoomInDownOnEnterAnimation,
  zoomOutUpOnLeaveAnimation
} from 'angular-animations';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'lbk-modal-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      *ngIf="open"
      @fadeInOnEnter
      @fadeOutOnLeave
      class="fixed top-0 left-0 w-full h-screen bg-black/30 z-50"
    >
      <!--      links-->
      <ul
        @zoomInDownOnEnter
        @zoomOutUpOnLeave
        class="mt-32 mx-auto max-w-sm bg-white font-semibold  text-xl rounded-lg py-6 tracking-wider"
      >
        <li><a class="animate-link" routerLink="/">About</a></li>
        <li><a class="animate-link" routerLink="/">Discover</a></li>
        <li><a class="animate-link" routerLink="/">Get Started</a></li>
      </ul>
      <!--      end links-->
    </div>
    <!--end mobile navbar active-->
  `,
  styles: [
    `
      ul {
        li {
          @apply py-6 border-b px-8 last:border-none last:pb-0 first:pt-0;
        }
      }
    `,
  ],
  animations: [
    fadeInOnEnterAnimation(),
    zoomInDownOnEnterAnimation(),
    zoomOutUpOnLeaveAnimation(),
    fadeOutOnLeaveAnimation(),
  ],
})
export class ModalLinksComponent extends Unsubscribe {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  constructor(private readonly _cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.appendSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(200))
      .subscribe(() => {
        if (this.open) this.close();
      });

    this.appendSub = fromEvent(window, 'click').subscribe((event: Event) => {
      const target = event.target as HTMLElement;
      const matched = target.matches('#menu');
      if (matched) return;

      const closest = target.closest('.modal-links');
      if (!closest && this.open) this.close();
    });
  }

  onLink() {
    this.close();
  }

  close() {
    this.open = false;
    this._cd.markForCheck();

    setTimeout(() => {
      this.openChange.emit(false);
    }, 1500);
  }
}
