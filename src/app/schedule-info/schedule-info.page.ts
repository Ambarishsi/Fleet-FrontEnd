import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-info',
  templateUrl: './schedule-info.page.html',
  styleUrls: ['./schedule-info.page.scss'],
})
export class ScheduleInfoPage implements OnInit {

  constructor(private modalControlTripInfo: ModalController) { }

  ngOnInit() {
  }
  


  dismissTripInfo(){
    this.modalControlTripInfo.dismiss();
  }

}
