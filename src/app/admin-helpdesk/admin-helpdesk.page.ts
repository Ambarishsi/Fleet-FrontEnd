import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-admin-helpdesk',
  templateUrl: './admin-helpdesk.page.html',
  styleUrls: ['./admin-helpdesk.page.scss'],
})
export class AdminHelpdeskPage implements OnInit {

  constructor(public modalCtrlAdminHelpdesk: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrlAdminHelpdesk.dismiss();
  }

}
