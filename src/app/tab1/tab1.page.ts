import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ProfilePage } from '../profile/profile.page';
import { IonRouterOutlet } from '@ionic/angular';
import { EmployeeService } from '../../services/profile/employee.service';


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

  constructor(public modalCtrl: ModalController, private routerOutlet: IonRouterOutlet, private employeeService: EmployeeService) {}

  ngOnInit() {
   this.userInfo();
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      swipeToClose: true, //only works with ios
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

  userInfo(){
    this.employeeService.findById(this.userId).subscribe(resp => {
      console.log('Ambarish', resp);
      if(resp.status === 200){
        this.employeeData = resp;
        this.employeeName = this.employeeData.data.firstName +' '+ this.employeeData.data.middleName +' '+ this.employeeData.data.lastName;
        this.employeeId = this.employeeData.data.employeeId;
      }else{
        console.log('error occured while getting userinfo from employee service');
      }
    }, err => {
      console.log(err);
    });
  }

}
