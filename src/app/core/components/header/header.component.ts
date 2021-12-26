import { Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="absolute w-full">
      <nav class="container flex items-center justify-between mt-8">
        <!--    logo-->
        <div>
          <img src="assets/images/logo.svg" alt="Logo" />
        </div>
        <!--    end logo-->

        <!--      links desktop-->
        <lbk-links-header class="hidden lg:block"></lbk-links-header>
        <!--      end links desktop-->

        <!-- menu -->
        <lbk-menu class="lg:hidden" [(open)]="openModal"></lbk-menu>
        <!-- end menu -->
      </nav>
      <!--    end mobile navbar normal-->
    </header>

    <lbk-modal-links [(open)]="openModal"></lbk-modal-links>
  `,
})
export class HeaderComponent {
  openModal = false;
}
