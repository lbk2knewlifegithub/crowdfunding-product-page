import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectPreviewListComponent, StatsComponent } from './components';
import { ProjectRiserComponent } from './components/project-riser.component';
import { CrowdfundingPageComponent } from './containers';
import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';

const COMPONENTS = [
  StatsComponent,
  ProjectPreviewListComponent,
  ProjectRiserComponent,
];
const CONTAINERS = [CrowdfundingPageComponent];

@NgModule({
  imports: [CommonModule, CrowdfundingRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CrowdfundingModule {}
