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
      {nome: "Fulano de Tal", email: "fulanodetal@email.com", telefone: 999999999},
      {nome: "Beltrano", email: "beltrano@email.com", telefone: 123454648},
      {nome: "José", email: "jose@email.com", telefone: 999999599},
      {nome: "Maria", email: "maria@email.com", telefone: 999999333},
      {nome: "Sicrano", email: "sicrano@email.com", telefone: 999499999},
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
