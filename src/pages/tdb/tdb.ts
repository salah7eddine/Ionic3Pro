import { HomePage } from './../home/home';
import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tdb',
  templateUrl: 'tdb.html',
})
export class TdbPage {

  constructor(private view:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TdbPage');
  }

  goBack(){
    //this.view.dismiss();
    this.navCtrl.setRoot(HomePage);
  }

}
