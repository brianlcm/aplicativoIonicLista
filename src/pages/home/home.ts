import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { contato } from './modelos/contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contatos: contato[];

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    this.contatos = [
      {nome: "Fulano de Tal", email: "fulanodetal@bol.com.br", telefone: 31999999999},
      {nome: "Beltrano", email: "beltrano@gmail.com", telefone: 32123454648},
      {nome: "Sicrano", email: "sicrano@yahoo.com.br", telefone: 11987654321},
      {nome: "José", email: "jose@gmail.com", telefone: 31999999599},
      {nome: "Maria", email: "maria@hotmail.com", telefone: 21999999333}
    ];
  }

  showToast(contatoSelecionado: contato) {
    let toast = this.toastCtrl.create({
      message: 'Nome do item selecionado: ' + contatoSelecionado,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Toast fechado');
    });
  
    toast.present();
  }

}
