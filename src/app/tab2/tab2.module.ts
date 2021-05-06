import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ScheduledTripComponent } from '../scheduled-trip/scheduled-trip.component';
import { ActiveTripsComponent } from '../active-trips/active-trips.component';

import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';


export class MyHammerConfig extends HammerGestureConfig {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  overrides = <any>{
    swipe: { direction: Hammer.DIRETION_ALLL }
  };
}


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [
    Tab2Page,
    ScheduledTripComponent,
    ActiveTripsComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ]
})
export class Tab2PageModule {}
