import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ActiveTripsComponent } from '../active-trips/active-trips.component';
import { ScheduledTripComponent } from '../scheduled-trip/scheduled-trip.component';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { MyscheduleFutureComponent } from '../myschedule-future/myschedule-future.component';
import { MyscheduleRevisionComponent } from '../myschedule-revision/myschedule-revision.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, MyscheduleFutureComponent,
    MyscheduleRevisionComponent],
    providers: [
      {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig
      }
    ]
})
export class Tab3PageModule {}
