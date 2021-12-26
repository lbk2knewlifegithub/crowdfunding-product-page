import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crowfunding',
    loadChildren: () =>
      import('./crowdfunding/crowdfunding.module').then(
        (m) => m.CrowdfundingModule
      ),
  },
  {
    path: '',
    redirectTo: '/crowfunding',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/crowfunding',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
