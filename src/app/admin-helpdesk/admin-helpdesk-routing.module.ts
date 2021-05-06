import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHelpdeskPage } from './admin-helpdesk.page';

const routes: Routes = [
  {
    path: '',
    component: AdminHelpdeskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHelpdeskPageRoutingModule {}
