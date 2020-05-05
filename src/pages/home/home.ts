import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contatos;

  constructor(public navCtrl: NavController) {
    this.contatos = [
      {nome: "Fulano de Tal", email: "fulanodetal@email.com", telefone: "999999999"},
      {nome: "Beltrano", email: "beltrano@email.com", telefone: "123454648"},
      {nome: "José", email: "jose@email.com", telefone: "999999599"},
      {nome: "Maria", email: "maria@email.com", telefone: "999999333"},
      {nome: "Sicrano", email: "sicrano@email.com", telefone: "999499999"},
    ];

  }

}
