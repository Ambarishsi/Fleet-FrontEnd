import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.page.html',
  styleUrls: ['./trip-info.page.scss'],
})
export class TripInfoPage implements OnInit {

  constructor(private modalControlTripInfo: ModalController) { }

  ngOnInit() {
  }


  dismissTripInfo(){
    this.modalControlTripInfo.dismiss();
  }

}
