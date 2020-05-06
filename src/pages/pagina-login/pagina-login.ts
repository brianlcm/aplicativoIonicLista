import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BoasVindasPage } from '../boas-vindas/boas-vindas';

@IonicPage()
@Component({
  selector: 'page-pagina-login',
  templateUrl: 'pagina-login.html',
})
export class PaginaLoginPage {
  username: String;
  password: String;
  usernameInput: String;
  passwordInput: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
    this.username = 'ciclano';
    this.password = 'querocafe';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaLoginPage');
  }

  login(username:String){
    if(this.username == this.usernameInput && this.password == this.passwordInput){
      this.navCtrl.push(BoasVindasPage, {usuarioSelecionado:username});
    }
    else{
      this.abreAlertController();
    }
  }

  abreAlertController(){
    let addInfomacoes = this.alertController.create({
      title: "Erro",
      message: "Usuário ou senha não encontrados. Por favor, tente novamente.",
        buttons:[
          {
            text: "Ok"
          }]
    });
    addInfomacoes.present()
  }

}
