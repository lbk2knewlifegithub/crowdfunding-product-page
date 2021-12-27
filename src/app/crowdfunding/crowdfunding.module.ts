import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import * as fromCrowdfunding from '@lbk/crowdfunding/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  fromDialog,
  fromPledgeModal,
  fromPledgePreview,
  fromPledgePreviewList,
  fromProjectRiser,
  fromStats,
  HeroComponent
} from './components';
import { CrowdfundingPageComponent } from './containers';
import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';
import { PledgesEffects, StatsEffects } from './effects';
import { DialogService } from './services/dialog.service';

const COMPONENTS = [
  fromDialog.COMPONENTS,
  fromPledgeModal.COMPONENTS,
  fromPledgePreviewList.COMPONENTS,
  fromProjectRiser.COMPONENTS,
  fromPledgePreview.COMPONENTS,
  fromStats.COMPONENTS,
  HeroComponent,
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
