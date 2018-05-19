import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaivoritePage } from './faivorite';

@NgModule({
  declarations: [
    FaivoritePage,
  ],
  imports: [
    IonicPageModule.forChild(FaivoritePage),
  ],
})
export class FaivoritePageModule {}
