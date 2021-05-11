import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {

  lat;
  long;

  constructor(public modalCtrlEditAddress: ModalController, private geolocation: Geolocation) { }

  ngOnInit() {
  }

  getLatLong() {
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res) => {
      this.lat = res.coords.latitude;
      this.long = res.coords.longitude;
    }).catch((e) => {
      console.log(e);
    });
  }

  dismiss() {
    this.modalCtrlEditAddress.dismiss();
  }

}
