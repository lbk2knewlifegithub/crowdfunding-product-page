import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'lbk-back-this-project',
  templateUrl: './back-this-project.component.html',
})
export class BackThisProjectComponent implements OnInit {
  @Output('close') close = new EventEmitter<void>();
  @Input('projects') projects!: Project[];

  ngOnInit(): void {
    // add project pledge with no reward
    // this.projects = [Project.noReward(), ...this.projects];
  }
}
