import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { zoomInUpOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'lbk-project-riser',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      @zoomInUpOnEnter
      class="relative rounded-lg shadow-md px-6 pt-12 pb-10 space-y-6 bg-white sm:px-10"
    >
      <!--    logo-->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="assets/images/logo-mastercraft.svg" alt="" />
      </div>
      <!--    end logo-->

      <!-- text -->
      <div class="text-center space-y-4">
        <h1 class="font-bold text-2xl">Mastercraft Bamboo Monitor Riser</h1>

        <p class="text-muted">
          A beautiful handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <!-- end text -->

      <div class="flex items-center justify-between">
        <button (click)="backThisProject.emit()" class="btn btn-primary">
          Back this project
        </button>

        <!--      bookmark-->
        <lbk-bookmark
          (click)="onBookmark()"
          [bookmarked]="bookmarked"
        ></lbk-bookmark>
        <!--      end bookmark-->
      </div>
    </section>
  `,
  animations: [zoomInUpOnEnterAnimation({ delay: 100 })],
})
export class ProjectRiserComponent {
  @Input() bookmarked!: boolean;
  @Output() backThisProject = new EventEmitter<void>();
  @Output() setAsBookmark = new EventEmitter<void>();
  @Output() unBookmark = new EventEmitter<void>();

  onBookmark() {
    console.log('bookmarked ' + this.bookmarked);

    if (this.bookmarked) return this.unBookmark.emit();
    this.setAsBookmark.emit();
  }
}
