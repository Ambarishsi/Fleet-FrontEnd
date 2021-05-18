/* eslint-disable radix */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { IonRouterOutlet } from '@ionic/angular';
import { PassdataprofileService } from '../../services/profile/passdataprofile.service';
import { AdminHelpdeskPage } from '../admin-helpdesk/admin-helpdesk.page';
import { TechSupportPage } from '../tech-support/tech-support.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  currTime: string;
  hours;
  minutes;
  strTime;
  darkmodeFlag = false;
  darkmodeFlagAuto = false;
  userInfo;
  autoDarkModeEnabled = false;


  constructor(public modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private passdataprofileService: PassdataprofileService) {

    }

  ngOnInit() {
    this.passdataprofileService.on<any>().subscribe(
      data => {
        this.userInfo = data.data;
      }
    );

  if(this.userInfo.isAutoDarkMode){
    this.autoDarkModeEnabled = true;
    this.darkmodeFlagAuto = true;
  }else{
    this.autoDarkModeEnabled = false;
    this.darkmodeFlagAuto = false;
  }

  }


  //showModalProfile ProfilePage
  async showModalProfile() {
    const modalProfile = await this.modalCtrl.create({
      component: ProfilePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modalProfile.present();
  }


  //showModalAdminHelpdesk
  async showModalAdminHelpdesk() {
    const modalAdminHelpdesk = await this.modalCtrl.create({
      component: AdminHelpdeskPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modalAdminHelpdesk.present();
  }


    //showModalTechSupport
    async showModalTechSupport() {
      const modalTechSupport = await this.modalCtrl.create({
        component: TechSupportPage,
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl
      });

      return await modalTechSupport.present();
    }

  //darkmode

   toggleDarkModeHandler = (event) => {
    document.body.classList.toggle('dark');
    if(event.target.ariaChecked === 'false'){
      this.darkmodeFlag = true;
    }else{
      this.darkmodeFlag = false;
    }
  };



  toggleDarkModeAutoHandler(ev) {
    if(ev.target.ariaChecked === 'false'){
      this.darkmodeFlagAuto = true;
      this.applyDarkMode();
    }else{
      this.darkmodeFlagAuto = false;
      this.applyDarkMode();
    }
  }

  applyDarkMode(){
    this.currTime = this.calculateCurrentTime(new Date()).toString();

    if(this.currTime.includes('pm')){
      if(parseInt(this.currTime.substring(0,2)) >= 6){
        document.body.classList.toggle('dark');
      }
    }else if(this.currTime.includes('am')){

      if(parseInt(this.currTime.substring(0,2)) === 12){
        document.body.classList.toggle('dark');
      }else if(parseInt(this.currTime.substring(0,2)) <=6){
        document.body.classList.toggle('dark');
      }

    }else{
      document.body.classList.toggle('light');
    }
  }

  calculateCurrentTime(date){
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    const ampm = this.hours >= 12 ? 'pm' : 'am';
    this.hours = this.hours % 12;
    this.hours = this.hours ? this.hours : 12;
    this.minutes = this.minutes < 10 ? '0'+this.minutes : this.minutes;
    this.strTime = this.hours + ':' + this.minutes + ' ' + ampm;
    return this.strTime;
  }

}
