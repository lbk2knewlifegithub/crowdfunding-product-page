import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-project-riser',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div>
        <!--    logo-->
        <!-- <lbk-logo></lbk-logo> -->
        <!--    end logo-->

        <!--    title-->
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <!--    end title-->

        <!--    description -->
        <p>
          A beautiful handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <!--    end description -->

        <!--    actions-->
        <section>
          <!--      back to project-->
          <!-- <a (click)="isActiveModal = true"  href="#" >Back this project</a > -->
          <!--      end back to project-->

          <!--      bookmark-->
          <div>
            <img src="/assets/images/icon-bookmark.svg" alt="Bookmark" />
            <p>Bookmark</p>
          </div>
          <!--      end bookmark-->
        </section>
        <!--    end actions-->
      </div>
    </section>
  `,
})
export class ProjectRiserComponent {}
