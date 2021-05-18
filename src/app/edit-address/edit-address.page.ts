import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';


@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {



  constructor(public modalCtrlEditAddress: ModalController) { }

  ngOnInit() {
  }



  dismiss() {
    this.modalCtrlEditAddress.dismiss();
  }

}
