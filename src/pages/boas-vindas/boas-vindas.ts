import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-boas-vindas',
  templateUrl: 'boas-vindas.html',
})
export class BoasVindasPage {
  usarname:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usarname = this.navParams.get('usuarioSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoasVindasPage');
  }

}
