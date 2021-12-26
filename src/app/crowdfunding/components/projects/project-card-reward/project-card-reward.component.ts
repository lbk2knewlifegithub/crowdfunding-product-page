import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'lbk-project-card-reward',
  templateUrl: './project-card-reward.component.html',
})
export class ProjectCardRewardComponent {
  @Input() project!: Project;
  isActiveModal = false;
  @Output() reward = new EventEmitter<void>();

  onReward(): void {
    this.isActiveModal = true;
    this.reward.emit();
  }
}
