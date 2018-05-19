/*
a service for admin user to add/remove users

*/
import {Component} from '@angular/core'
@Component({
    selector:'page-addremoveuser',

})
export class AddRemoveUsers{
    OnAddUser(){
      console.log("added");
    }
   OnRemoveUser(){
     console.log("deleted");
   }

}
