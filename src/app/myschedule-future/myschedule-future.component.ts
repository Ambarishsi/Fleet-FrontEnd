import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ScheduleInfoPage } from '../schedule-info/schedule-info.page';

@Component({
  selector: 'app-myschedule-future',
  templateUrl: './myschedule-future.component.html',
  styleUrls: ['./myschedule-future.component.scss'],
})
export class MyscheduleFutureComponent implements OnInit {

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
