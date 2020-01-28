import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult, CalendarComponentOptions } from 'ion2-calendar'
import { HomePage } from "../home/home";

/**
 * Generated class for the AssignePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assigne',
  templateUrl: 'assigne.html',
})
export class AssignePage {
  taskdates: any = [];

  dateRange: {
    from: Date;
    to: Date
  }

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, public events: Events) {
    this.gettasks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignePage');

    this.gettasks();
  }
  signout() {
    this.navCtrl.push(HomePage);
  }
  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Select Date Range',
      closeIcon: true,
      doneIcon: true,
      from: this.taskdates.startdate,
      to: this.taskdates.enddate,
      defaultScrollTo: this.taskdates.enddate,
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      if (type === 'done') {
        this.dateRange = Object.assign({}, {
          from: date.from.dateObj,
          to: date.to.dateObj,
        })
      }

    });
  }
  async gettasks() {
    await this.storage.get('task').then((res) => {
      var myObj = JSON.parse(res);
      this.taskdates = (myObj);
      let len = this.taskdates.length

      this.dateRange = { from: this.taskdates[0].startdate, to: this.taskdates[len - 1].enddate };

      console.log('get', this.taskdates);

    })
  }
}
