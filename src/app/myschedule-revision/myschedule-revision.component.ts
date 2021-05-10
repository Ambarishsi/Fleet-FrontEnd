import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ScheduleInfoPage } from '../schedule-info/schedule-info.page';
import { TripInfoPage } from '../trip-info/trip-info.page';

@Component({
  selector: 'app-myschedule-revision',
  templateUrl: './myschedule-revision.component.html',
  styleUrls: ['./myschedule-revision.component.scss'],
})
export class MyscheduleRevisionComponent implements OnInit {

  constructor(public modalCtrlTripInfo: ModalController,
    private routerOutletTripInfo: IonRouterOutlet) { }

  ngOnInit() {}

  //showModalTripInfo
  async showModalTripInfo() {
    const modalTripInfo = await this.modalCtrlTripInfo.create({
      component: ScheduleInfoPage,
      swipeToClose: true,
      presentingElement: this.routerOutletTripInfo.nativeEl
    });

    return await modalTripInfo.present();
  }
}
