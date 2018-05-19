import { Component } from '@angular/core';
import {LoadingController, NavController,MenuController} from 'ionic-angular';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  home=HomePage;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'myMenu');
  }


  OnSart(){
    let loading = this.loadingCtrl.create({

      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(this.home);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

  }
}
