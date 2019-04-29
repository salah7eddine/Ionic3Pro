import { HistoryPage } from './../pages/history/history';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ParkManagementPage } from './../pages/park-management/park-management';
import { DataManagementPage } from './../pages/data-management/data-management';
import { RealTimePage } from './../pages/real-time/real-time';
import { ClientsPage } from './../pages/clients/clients';
import { HomePage } from './../pages/home/home';
import { ServicesPage } from './../pages/services/services';
import { AccountPage } from './../pages/account/account';
import { Component, ViewChild, OnInit } from "@angular/core";
import { Platform, Nav, AlertController } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { LoginPage } from "../pages/login/login";
import { AuthenticationService } from '../services/authentication-service';


@Component({ 
  templateUrl: 'app.html'
})

export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  nameUser:String='';
  audience:String='';
  dateCreated:Date=null;
  Day:number;
  Month:number;
  FullYear:number;
  
  menus =[  
    {title:'Temps Réels', component:RealTimePage},
    {title:'History', component:HistoryPage},
    {title:'Gestion Donnees', component:DataManagementPage},
    {title:'Gestion du Parc', component:ParkManagementPage},
    {title:'Services', component:ServicesPage},
    {title:'Account', component:AccountPage},
    {title:'Clients', component:ClientsPage},
    {title:'Home', component:HomePage}
  ];

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public keyboard: Keyboard,
    private alertCtrl: AlertController,
    private authService:AuthenticationService
  ) {
    this.initializeApp();
  }

  ngOnInit(){
    let jwtHelperService = new JwtHelperService();
    let jwt = localStorage.getItem('token');
    if(jwt != null){
      this.nameUser=jwtHelperService.decodeToken(jwt).sub;
      this.audience=jwtHelperService.decodeToken(jwt).audience;
      
      this.dateCreated=new Date(jwtHelperService.decodeToken(jwt).created);
        this.Day = this.dateCreated.getDay();
        this.Month = this.dateCreated.getMonth();
        this.FullYear = this.dateCreated.getFullYear();
    }  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.hideFormAccessoryBar(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Déconnexion',
      message: 'Souhaitez-vous vraiment vous déconnecter?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Déconnexion',
          handler: () => {
            this.authService.logout();
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
    
  }
  
}


