import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VidangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vidange',
  templateUrl: 'vidange.html',
})
export class VidangePage {

  constructor(private view:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VidangePage');
    console.log('Passed params', this.navParams.data);
  }

  goBack(){
    //this.view.dismiss();
    this.navCtrl.setRoot(HomePage);
  }

}
