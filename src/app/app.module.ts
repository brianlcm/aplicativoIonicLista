import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InformaDadosPage } from '../pages/informa-dados/informa-dados';
import { PaginaLoginPage } from '../pages/pagina-login/pagina-login';
import { BoasVindasPage } from '../pages/boas-vindas/boas-vindas';
import { DemonstraBadgesPage } from '../pages/demonstra-badges/demonstra-badges';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformaDadosPage,
    PaginaLoginPage,
    BoasVindasPage,
    DemonstraBadgesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformaDadosPage,
    PaginaLoginPage,
    BoasVindasPage,
    DemonstraBadgesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
