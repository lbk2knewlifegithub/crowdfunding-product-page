import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdfundingPageComponent } from './containers';

const routes: Routes = [{ path: '', component: CrowdfundingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrowdfundingRoutingModule {}
