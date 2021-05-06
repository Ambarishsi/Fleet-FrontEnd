import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechSupportPage } from './tech-support.page';

const routes: Routes = [
  {
    path: '',
    component: TechSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechSupportPageRoutingModule {}
