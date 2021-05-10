import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.page.html',
  styleUrls: ['./tech-support.page.scss'],
})
export class TechSupportPage implements OnInit, AfterViewInit{



  constructor(public modalCtrlTechSupport: ModalController,
    private renderer: Renderer2,
    public loadingController: LoadingController) {

    }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('inside view init');
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Connecting...',
      duration: 4000,
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }


  myLoadEvent(){
console.log('its loaded');
  }

  dismissTechSupport() {
    this.modalCtrlTechSupport.dismiss();
  }


}
