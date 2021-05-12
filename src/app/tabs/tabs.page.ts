import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PassdataprofileService } from '../../services/profile/passdataprofile.service';
import { EmployeeService } from '../../services/profile/employee.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  employeeName: string;
  employeeId: string;
  employeeData: any;
  userId = '609100323a6c2c2ec62e6577';

  constructor(private router: Router,
    private employeeService: EmployeeService,
    private passdataprofileService: PassdataprofileService,
    public toastController: ToastController) {
    if (localStorage.getItem('UserData') === null || localStorage.getItem('UserData') === undefined ||
        localStorage.getItem('UserData') === '') {
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/tabs/tab2');
    }
  }

  ngOnInit() {
    this.userInfo();
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

  sendEmployeeData(): void {
    this.passdataprofileService.emit<any>(this.employeeData);
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

}
