import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {NgForm} from "@angular/forms";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
   gender:string="";
   show:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  OnSignIn(){
    let loading = this.loadingCtrl.create({

      content: 'Go back to Sign in Please wait...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(HomePage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
}

  Onsubmit(f:NgForm){
    this.OnSignIn();
    console.log(f);

  }

}
