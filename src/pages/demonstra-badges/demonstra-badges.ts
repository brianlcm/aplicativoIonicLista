import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-demonstra-badges',
  templateUrl: 'demonstra-badges.html',
})
export class DemonstraBadgesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemonstraBadgesPage');
  }

}
