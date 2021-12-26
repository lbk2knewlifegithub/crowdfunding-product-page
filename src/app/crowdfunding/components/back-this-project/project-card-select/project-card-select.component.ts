import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'lbk-project-card-select',
  templateUrl: './project-card-select.component.html',
})
export class ProjectCardSelectComponent  {
  isModalCompleted = false;
  @Input('project') project!: Project;
}
