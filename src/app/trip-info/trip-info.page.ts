import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LiveTrackingPage } from '../live-tracking/live-tracking.page';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.page.html',
  styleUrls: ['./trip-info.page.scss'],
})
export class TripInfoPage implements OnInit {

  constructor(private modalControlTripInfo: ModalController) { }

  ngOnInit() {
  }


  //showModalEditAddress
  async showModalCabLiveTracing() {
    const modalLiveTrackingCab = await this.modalControlTripInfo.create({
      component: LiveTrackingPage,
      swipeToClose: true,
    });

    return await modalLiveTrackingCab.present();
  }

  dismissTripInfo(){
    this.modalControlTripInfo.dismiss();
  }

}
