import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-bookmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [ngClass]="{ 'md:!bg-primary-900/20': bookmarked }"
      class="flex gap-4 items-center  rounded-full hover:opacity-60 md:pr-6 md:bg-muted/20"
    >
      <!-- icon bookmark -->
      <div
        [ngClass]="{ '!bg-primary-900': bookmarked }"
        class="duration-300 w-14 h-14 rounded-full bg-black grid place-content-center"
      >
        <span
          [ngClass]="{ '!text-white': bookmarked }"
          class="duration-300 fa fa-bookmark text-muted leading-10"
        ></span>
      </div>
      <!-- end icon bookmark -->

      <!-- text -->
      <p
        [ngClass]="{ 'text-primary-900': bookmarked }"
        class="duration-300 hidden md:block font-black text-muted"
      >
        Bookmark
      </p>
      <!-- end text -->
    </button>
  `,
})
export class BookmarkComponent {
  @Input() bookmarked!: boolean;
}
