import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssignorPage } from "../assignor/assignor";
import { AssignePage } from "../assigne/assigne";
import { Toast } from "../../toast";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('username') user;

  @ViewChild('password') password;

  constructor(public navCtrl: NavController, private toastCtrl: Toast) {

  }
  Login() {
    if (this.user.value === "asignee" && this.password.value === "asignee") {
      this.navCtrl.push(AssignorPage);
    }

    else if (this.user.value === "assignor" && this.password.value === 'assignor') {
      this.navCtrl.push(AssignePage);
    }
    else {
      this.toastCtrl.presentToast('Please provide valid details');
    }

  }
}
