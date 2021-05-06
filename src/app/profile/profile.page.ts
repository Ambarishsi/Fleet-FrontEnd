import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { PassdataprofileService } from '../../services/profile/passdataprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userInfo: any;

  constructor(public modalCtrl: ModalController, private passdataprofileService: PassdataprofileService) {

  }

  ngOnInit() {
     this.passdataprofileService.on<any>().subscribe(
       data => {
         this.userInfo = data.data;
       }
     );
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }



}
