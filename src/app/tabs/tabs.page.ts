import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {
    if (localStorage.getItem('UserData') === null || localStorage.getItem('UserData') === undefined ||
        localStorage.getItem('UserData') === '') {
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/tabs/tab2');
    }
  }

}
