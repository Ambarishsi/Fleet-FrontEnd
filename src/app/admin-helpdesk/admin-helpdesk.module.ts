import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHelpdeskPageRoutingModule } from './admin-helpdesk-routing.module';

import { AdminHelpdeskPage } from './admin-helpdesk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHelpdeskPageRoutingModule
  ],
  declarations: [AdminHelpdeskPage]
})
export class AdminHelpdeskPageModule {}
