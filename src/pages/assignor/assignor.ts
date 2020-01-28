import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from "../../toast";
import { HomePage } from "../home/home";

/**
 * Generated class for the AssignorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignor',
  templateUrl: 'assignor.html',
})
export class AssignorPage {
  totalhours: number = 0;
  taskdates: any;
  taskdetails: any;
  @ViewChild('task') task;
  @ViewChild('hours') hours;
  @ViewChild('name') name;
  tasklist = [];
  myObj: any;
  id: number = 0;

  StartDate: any;
  enddate: any
  td: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private toastCtrl: Toast) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignorPage');

  }
  signout() {
    this.navCtrl.push(HomePage);
  }
  addtask() {
    let input = {
      id: this.id++,
      name: this.name.value,
      task: this.task.value,
      startdate: this.StartDate,
      enddate: this.enddate,
      noofhours: parseInt(this.hours.value),
    }
    if (this.taskdates) {
      // this.totalhours = this.totalhours + input.noofhours;

      // this.td = this.taskdates[0].noofhours;
      if (input.noofhours < 9) {
        this.gettasks();
        for (let i = 0; i < this.taskdates.length; i++) {
          this.totalhours = this.taskdates[i].noofhours + input.noofhours;
        }
        if (this.totalhours > 0 && this.totalhours < 9) {

          this.tasklist.push(input);
          let a = JSON.stringify(this.tasklist);

          this.storage.set('task', a);
          this.clearvalues();
          this.toastCtrl.presentToast('Succesfully Added');


        }
        else {
          this.toastCtrl.presentToast('user has only 8 working hours');
        }

      }
    }
    else if (input.noofhours < 9) {
      this.totalhours = this.totalhours + input.noofhours;
      this.tasklist.push(input);
      let a = JSON.stringify(this.tasklist);

      this.storage.set('task', a);
      this.clearvalues();
      this.toastCtrl.presentToast('Succesfully Added');
    }
    else {
      this.toastCtrl.presentToast('number of hours should be less than 8 or user tasks or more')

    }
    let self = this;
    setTimeout(function () {
      self.gettasks();
    }, 300);
    // this.gettasks();

  }
  clearvalues() {
    this.name.value = "";
    this.task.value = "";
    this.StartDate = "";
    this.enddate = "";
    this.hours.value = "";
  }
  async gettasks() {
    await this.storage.get('task')
      .then(res => {
        console.log('res:', res);
        var myObj = JSON.parse(res);
        this.taskdates = (myObj);

        return this.taskdates;
      })

  }

}
