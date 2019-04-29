import { RealTimePage } from './../real-time/real-time';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DCirculationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-d-circulation',
  templateUrl: 'd-circulation.html',
})
export class DCirculationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DCirculationPage');
    console.log('Passed params', this.navParams.data);
  }

  goBack(){
    this.navCtrl.setRoot(RealTimePage);
  }

}
