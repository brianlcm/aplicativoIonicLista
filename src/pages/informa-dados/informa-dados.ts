import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the InformaDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informa-dados',
  templateUrl: 'informa-dados.html',
})
export class InformaDadosPage {

  public emailAdicionado: String;
  public telefoneAdicionado: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformaDadosPage');
  }

  abreAlertController(){
    let addInfomacoes = this.alertController.create({
      title: "Adicionar informações",
      message: "Informe os dados nos campos abaixo",
      inputs:[
        {
          type: "text",
          placeholder: "E-Mail",
          name: "addEmail"
        },
        {
          type:"number",
          placeholder: "Telefone",
          name: "addTelefone"
        }
      ],
        buttons:[
          {
            text: "Cancelar"
          },
          {
            text: "Enviar",
            handler: (inputData)=>{
              let emailText = inputData.addEmail;
              let telefoneNumber = inputData.addTelefone;
              this.emailAdicionado = emailText;
              this.telefoneAdicionado = telefoneNumber;
            }
          }]
    });
    addInfomacoes.present()
  }

}
