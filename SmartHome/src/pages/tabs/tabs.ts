import { Component } from '@angular/core';
import {MainPage} from "../main/main";
import {FaivoritePage} from "../faivorite/faivorite";
import {SettingsPage} from "../settings/settings";
import { MenuController} from "ionic-angular";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
main=MainPage;
fav=FaivoritePage;
 set= SettingsPage;
  constructor( private menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
  }
}
