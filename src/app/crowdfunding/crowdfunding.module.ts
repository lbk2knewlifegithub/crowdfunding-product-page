import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import * as fromCrowdfunding from '@lbk/crowdfunding/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AboutProjectComponent,
  HeroComponent,
  PledgePreviewComponent,
  PledgePreviewListComponent,
  PledgesDialogComponent,
  ProcessBarComponent,
  SelectRewardButtonComponent,
  StatsComponent,
  ThanksComponent
} from './components';
import { BookmarkComponent } from './components/bookmark.component';
import { ProjectRiserComponent } from './components/project-riser.component';
import { CrowdfundingPageComponent } from './containers';
import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';
import { PledgesEffects, StatsEffects } from './effects';

const COMPONENTS = [
  StatsComponent,
  PledgePreviewListComponent,
  ProjectRiserComponent,
  HeroComponent,
  BookmarkComponent,
  PledgePreviewComponent,
  ProcessBarComponent,
  SelectRewardButtonComponent,
  ThanksComponent,
  AboutProjectComponent,
  PledgesDialogComponent,
];
const CONTAINERS = [CrowdfundingPageComponent];

@NgModule({
  imports: [
    CommonModule,
    CrowdfundingRoutingModule,
    MatDialogModule,
    StoreModule.forFeature(
      fromCrowdfunding.crowdfundingFeatureKey,
      fromCrowdfunding.reducers
    ),
    EffectsModule.forFeature([PledgesEffects, StatsEffects]),
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CrowdfundingModule {}
