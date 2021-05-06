import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoasterPage } from './roaster.page';

const routes: Routes = [
  {
    path: '',
    component: RoasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoasterPageRoutingModule {}
