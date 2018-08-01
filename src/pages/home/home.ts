import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  on:boolean = false;
  off:boolean = false;
  constructor(public navCtrl: NavController,private flashlight: Flashlight) {
  this.on = true;
  }
  
  
on1(){
  this.flashlight.switchOn()
  this.on = false;
  this.off = true;
}
off1(){
  this.flashlight.switchOff()
  this.on = true;
  this.off = false;
}


}
