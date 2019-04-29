import { HistoryPage } from './../history/history';
import { ParkManagementPage } from './../park-management/park-management';
import { DataManagementPage } from './../data-management/data-management';
import { RealTimePage } from './../real-time/real-time';
import { ServicesPage } from './../services/services';
import { ClientsPage } from './../clients/clients';
import {Component, ViewChild,Renderer, ElementRef} from "@angular/core";
import {NavController, MenuController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('imgPage',{read: ElementRef}) imgPage;
  

  constructor(public nav: NavController, public menuCtrl: MenuController,public renderer:Renderer) {
    // set sample data
    this.menuCtrl.swipeEnable(true, 'authenticated');
  }

  onTempsReel(){
    this.renderer.setElementStyle(this.imgPage.nativeElement,'opacity','0.5');
    this.nav.setRoot(RealTimePage);
  }
  
  onHistory(){
    this.nav.setRoot(HistoryPage);
  }
  
  onGestionDonnees(){
    this.nav.setRoot(DataManagementPage);
  }
  
  onGestionParc(){
    this.nav.setRoot(ParkManagementPage);
  }
  
  onClients(){
    this.nav.setRoot(ClientsPage);
  }
  
  onServices(){
    this.nav.setRoot(ServicesPage);
  }





  

}


