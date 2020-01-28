import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssignePage } from "../pages/assigne/assigne";
import { AssignorPage } from "../pages/assignor/assignor";
import { IonicStorageModule } from '@ionic/storage';
import { CalendarModule } from "ion2-calendar";
import { Toast } from "../toast";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AssignePage,
    AssignorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AssignePage,
    AssignorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
