import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { PassdataprofileService } from '../../services/profile/passdataprofile.service';
import { EditAddressPage } from '../edit-address/edit-address.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userInfo: any;

  constructor(public modalCtrlProfile: ModalController,
    private passdataprofileService: PassdataprofileService
  ) {

  }

  ngOnInit() {
     this.passdataprofileService.on<any>().subscribe(
       data => {
         this.userInfo = data.data;
       }
     );
  }

   //showModalEditAddress
   async showModalEditAddress() {
    const modalAddress = await this.modalCtrlProfile.create({
      component: EditAddressPage,
      swipeToClose: true,
    });

    return await modalAddress.present();
  }

  dismiss() {
    this.modalCtrlProfile.dismiss();
  }



}
