import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-bookmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button>
      <img src="/assets/images/icon-bookmark.svg" alt="Bookmark" />
      <!-- <p>Bookmark</p> -->
    </button>
  `,
})
export class BookmarkComponent {}
