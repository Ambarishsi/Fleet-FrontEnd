import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginService } from './login.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = new FormControl('username', [
    Validators.required]);
  password = new FormControl('password');



  constructor(public modalCtrl: ModalController,
    private router: Router,
     private loginService: LoginService,
     public toastController: ToastController) { }

  ngOnInit() {
    localStorage.clear();
    this.username.setValue('');
    this.password.setValue('');
  }

  login() {

    const requestData = {
      username: this.username.value,
      password: this.password.value
    };

    this.loginService.login(requestData).subscribe(data => {
      localStorage.setItem('UserData', JSON.stringify(data));
      this.router.navigateByUrl('/tabs/tab2');
    }, err => {
      if (err.status === 401) {
        this.presentToast('Invalid username or password');
      } else {
        this.presentToast('Please try again');
      }
      console.log(err);
    });
  }


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


  dismiss() {
    this.modalCtrl.dismiss();
  }
}
