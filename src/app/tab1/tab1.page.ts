import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ProfilePage } from '../profile/profile.page';
import { IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      swipeToClose: true,
      // presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }


  //showModalProfile ProfilePage
  async showModalProfile() {
    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }

}
