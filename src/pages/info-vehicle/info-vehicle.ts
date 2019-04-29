import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the InfoVehiclePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-vehicle',
  templateUrl: 'info-vehicle.html'
})
export class InfoVehiclePage {

  carburantRoot = 'CarburantPage'
  vidangeRoot = 'VidangePage'
  dCirculationRoot = 'DCirculationPage'
  tdbRoot = 'TdbPage'


  constructor(public navCtrl: NavController) {}

  goBack(){
    this.navCtrl.setRoot(HomePage);
  }

  
  

  

}
