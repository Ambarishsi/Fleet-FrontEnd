import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController) {}
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      swipeToClose: true,
    });
    return await modal.present();
  }

}
