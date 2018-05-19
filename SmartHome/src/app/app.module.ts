import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SignupPage} from "../pages/signup/signup";
import {SigninPage} from "../pages/signin/signin";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {FaivoritePage} from "../pages/faivorite/faivorite";
import {MainPage} from "../pages/main/main";
import {StartPage} from "../pages/start/start";
import {AddRemoveUsers} from "../services/AddRemoveUser";
import {UserAuthService} from "../services/userAuth";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    SettingsPage,
    FaivoritePage,
    MainPage,
    TabsPage,
    StartPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    SettingsPage,
    FaivoritePage,
    MainPage,
    TabsPage,
    StartPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AddRemoveUsers,UserAuthService

  ]
})
export class AppModule {}
