import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { TripInfoPage } from '../trip-info/trip-info.page';

@Component({
  selector: 'app-active-trips',
  templateUrl: './active-trips.component.html',
  styleUrls: ['./active-trips.component.scss'],
})
export class ActiveTripsComponent implements OnInit {

  constructor(public modalCtrlTripInfo: ModalController,
    private routerOutletTripInfo: IonRouterOutlet) { }

  ngOnInit() {}

  //showModalTripInfo
  async showModalTripInfo() {
    const modalTripInfo = await this.modalCtrlTripInfo.create({
      component: TripInfoPage,
      swipeToClose: true,
      presentingElement: this.routerOutletTripInfo.nativeEl
    });

    return await modalTripInfo.present();
  }
}
