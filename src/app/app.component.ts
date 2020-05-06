import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InformaDadosPage } from '../pages/informa-dados/informa-dados';
import { PaginaLoginPage } from '../pages/pagina-login/pagina-login';
import { DemonstraBadgesPage } from '../pages/demonstra-badges/demonstra-badges';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        {title: 'Home', component:HomePage},
        {title: 'Login', component:PaginaLoginPage},
        {title: 'Informar dados', component:InformaDadosPage},
        {title: 'Badges', component: DemonstraBadgesPage}

      ];
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

