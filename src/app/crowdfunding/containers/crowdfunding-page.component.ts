import { Component } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'lbk-home',
  template: `
    <main>
      <lbk-project-riser></lbk-project-riser>

      <!--  stats-->
      <lbk-stats></lbk-stats>
      <!--  end stats-->

      <!--  projects-->
      <lbk-project-preview-list
        [projects]="projects"
      ></lbk-project-preview-list>
      <!--  end projects-->
    </main>
  `,
})
export class CrowdfundingPageComponent {
  projects: Project[] = [];
}
