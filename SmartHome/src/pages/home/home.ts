import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";

import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   Signup=SignupPage;
  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController) {

  }

  OnSignIn(){
    let loading = this.loadingCtrl.create({

      content: 'Verify your Username and Password Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(TabsPage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

  }

}
