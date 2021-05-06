import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = new FormControl('username', [
    Validators.required]);
  password = new FormControl('password');



  constructor(public modalCtrl: ModalController, private router: Router, private loginService: LoginService) { }

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
      this.router.navigateByUrl('/tabs/tab1');
    }, err => {
      if (err.status === 401) {
        alert('Invalid username or password');
      } else {
        alert('Please try again');
      }
      console.log(err);
    });
  }


  dismiss() {
    this.modalCtrl.dismiss();
  }
}
