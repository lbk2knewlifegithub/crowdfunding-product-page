import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import * as fromCrowdfunding from '@lbk/crowdfunding/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AboutProjectComponent,
  BookmarkComponent,
  CheckboxComponent,
  EnterPledgeComponent,
  HeroComponent,
  PledgeModalComponent,
  PledgePreviewComponent,
  PledgePreviewListComponent,
  PledgesDialogComponent,
  ProcessBarComponent,
  ProjectRiserComponent,
  SelectRewardButtonComponent,
  StatsComponent,
  ThanksComponent
} from './components';
import { CrowdfundingPageComponent } from './containers';
import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';
import { PledgesEffects, StatsEffects } from './effects';
import { DialogService } from './services/dialog.service';

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
  PledgeModalComponent,
  CheckboxComponent,
  EnterPledgeComponent,
];
const CONTAINERS = [CrowdfundingPageComponent];

@NgModule({
  imports: [
    CommonModule,
    CrowdfundingRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    StoreModule.forFeature(
      fromCrowdfunding.crowdfundingFeatureKey,
      fromCrowdfunding.reducers
    ),
    EffectsModule.forFeature([PledgesEffects, StatsEffects]),
  ],
  declarations: [COMPONENTS, CONTAINERS],
  providers: [DialogService],
})
export class CrowdfundingModule {}
