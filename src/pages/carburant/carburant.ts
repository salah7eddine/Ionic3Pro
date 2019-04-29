import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-carburant',
  templateUrl: 'carburant.html',
})
export class CarburantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarburantPage');
    console.log('Passed params', this.navParams.data);
  }

  goBack(){
    //this.view.dismiss();
    this.navCtrl.setRoot(HomePage);
  }

}
