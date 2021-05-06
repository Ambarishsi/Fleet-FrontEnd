import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { IonRouterOutlet } from '@ionic/angular';
import { EmployeeService } from '../../services/profile/employee.service';
import { PassdataprofileService } from '../../services/profile/passdataprofile.service';
import { AdminHelpdeskPage } from '../admin-helpdesk/admin-helpdesk.page';
import { TechSupportPage } from '../tech-support/tech-support.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  employeeName: string;
  employeeId: string;
  employeeData: any;
  userId = '609100323a6c2c2ec62e6577';

  constructor(public modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private employeeService: EmployeeService,
    private passdataprofileService: PassdataprofileService,
    public toastController: ToastController) {}

  ngOnInit() {
   this.userInfo();
  }

  sendEmployeeData(): void {
    this.passdataprofileService.emit<any>(this.employeeData);
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

    //message toast
    async presentToast(errCode: string) {
      const toast = await this.toastController.create({
        message: errCode,
        position: 'bottom',
        duration: 2000,
        animated: true,
        translucent: true,
        color: 'tertiary',
        buttons: [
           {
            text: 'X',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await toast.present();

      const { role } = await toast.onDidDismiss();
    }

  userInfo(){
    this.employeeService.findById(this.userId).subscribe(resp => {
      // console.log('Ambarish', resp);
      if(resp.status === 200){
        this.employeeData = resp;
        this.employeeName = this.employeeData.data.firstName +' '+ this.employeeData.data.middleName +' '+ this.employeeData.data.lastName;
        this.employeeId = this.employeeData.data.employeeId;
        this.sendEmployeeData();
      }else{
        this.presentToast('error occured while getting userinfo from employee service');
      }
    }, err => {
      console.log(err);
    });
  }

}
