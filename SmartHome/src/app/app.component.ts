import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AddRemoveUsers} from "../services/AddRemoveUser";

import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {StartPage} from "../pages/start/start";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  start=StartPage;
  rootPage= TabsPage;
  home=HomePage;
  @ViewChild('nav') nav: NavController;
   test:boolean=false;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ,private menuCtrl:MenuController, public alertCtrl:AlertController,private addremoveuser:AddRemoveUsers) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(Page: any){
    this.nav.setRoot(Page);
    this.menuCtrl.close();
  }
  OnRemoveUser(){
 let alert=this.alertCtrl.create({
   title:'User Delete',
   subTitle:'Are you sure you want to delete this user?',
   message:'You will not be able to restore ',
   buttons:[
     {
      text:'Ok ',
      handler: ()=> {
       this.addremoveuser.OnRemoveUser();
      }
     },
     {
       text:'Cancel',
       handler: ()=>{
         console.log('canceled');
       }
     }
   ]
 });
 alert.present();
  }
}

