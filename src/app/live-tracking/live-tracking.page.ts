import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.page.html',
  styleUrls: ['./live-tracking.page.scss'],
})
export class LiveTrackingPage implements OnInit {

  constructor(public modalCtrlLiveTracking: ModalController) { }

  ngOnInit() {
  }




  dismissLiveTrackingModal() {
    this.modalCtrlLiveTracking.dismiss();
  }

}
