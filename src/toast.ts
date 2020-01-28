

import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

@Injectable()
export class Toast {

    constructor(private toastCtrl: ToastController) {

    }



    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }


}