import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  HeroComponent,
  PledgePreviewComponent,
  PledgePreviewListComponent,
  StatsComponent
} from './components';
import { BookmarkComponent } from './components/bookmark.component';
import { ProjectRiserComponent } from './components/project-riser.component';
import { CrowdfundingPageComponent } from './containers';
import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';

const COMPONENTS = [
  StatsComponent,
  PledgePreviewListComponent,
  ProjectRiserComponent,
  HeroComponent,
  BookmarkComponent,
  PledgePreviewComponent,
];
const CONTAINERS = [CrowdfundingPageComponent];

@NgModule({
  imports: [CommonModule, CrowdfundingRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CrowdfundingModule {}
