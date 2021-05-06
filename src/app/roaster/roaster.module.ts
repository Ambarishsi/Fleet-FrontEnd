import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoasterPageRoutingModule } from './roaster-routing.module';

import { RoasterPage } from './roaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoasterPageRoutingModule
  ],
  declarations: [RoasterPage]
})
export class RoasterPageModule {}
