import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechSupportPageRoutingModule } from './tech-support-routing.module';

import { TechSupportPage } from './tech-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechSupportPageRoutingModule
  ],
  declarations: [TechSupportPage]
})
export class TechSupportPageModule {}
