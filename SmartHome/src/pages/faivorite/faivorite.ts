import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import {SigninPage} from "../signin/signin";
@Component({
  selector: 'page-faivorite',
  templateUrl: 'faivorite.html',
})
export class FaivoritePage {
  numberOfmessages:number=7;
 constructor(private popoverCtrl:PopoverController){}
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(SigninPage);
    popover.present({
      ev: myEvent
    });
  }

}
