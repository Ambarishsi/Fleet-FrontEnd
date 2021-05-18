import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTrackingPageRoutingModule } from './live-tracking-routing.module';

import { LiveTrackingPage } from './live-tracking.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTrackingPageRoutingModule,
    SharedModule
  ],
  declarations: [LiveTrackingPage]
})
export class LiveTrackingPageModule {}
