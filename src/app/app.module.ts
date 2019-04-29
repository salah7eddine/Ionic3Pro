import { HistoryCarPageModule } from './../pages/history-car/history-car.module';
import { HistoryPage } from './../pages/history/history';
import { VidangePageModule } from './../pages/vidange/vidange.module';
import { TdbPageModule } from './../pages/tdb/tdb.module';
import { DCirculationPageModule } from './../pages/d-circulation/d-circulation.module';
import { CarburantPageModule } from './../pages/carburant/carburant.module';
import { CarDetailsPageModule } from './../pages/car-details/car-details.module';
import { ParkManagementPage } from './../pages/park-management/park-management';
import { DataManagementPage } from './../pages/data-management/data-management';
import { RealTimePage } from './../pages/real-time/real-time';
import { CarService } from './../services/car-service';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './../services/authentication-service';
import { ServicesPage } from './../pages/services/services';
import { ClientsPage } from './../pages/clients/clients';
import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
 
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen'; 
import {Keyboard} from '@ionic-native/keyboard';

import {MyApp} from "./app.component";

import {AccountPage} from "../pages/account/account";
 
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { TooltipsModule } from 'ionic-tooltips';; 




// import services
// end import services
// end import services

// import pages 
// end import pages

@NgModule({
  declarations: [
    MyApp,   
    AccountPage,
    HomePage, 
    LoginPage,
    NotificationsPage,
    RealTimePage, 
    HistoryPage,
    DataManagementPage,
    ParkManagementPage,
    ClientsPage,
    ServicesPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TooltipsModule,
    LeafletModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      // mode: 'md', --> uncomment in case you'll do an Web App (PWA) build.
      scrollPadding: false,
      scrollAssist: true, 
      autoFocusAssist: false,  
    }),
    CarDetailsPageModule,
    CarburantPageModule,
    DCirculationPageModule,
    TdbPageModule,
    VidangePageModule,
    HistoryCarPageModule
    
  ],

  bootstrap: [IonicApp],
  entryComponents: [  
    MyApp,
    AccountPage, 
    HomePage,
    LoginPage, 
    NotificationsPage, 
    RealTimePage, 
    HistoryPage,
    DataManagementPage,
    ParkManagementPage,
    ClientsPage,
    ServicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    AuthenticationService,  
    CarService
  ]
})

export class AppModule {
}
