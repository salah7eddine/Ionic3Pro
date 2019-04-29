import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-history-car',
  templateUrl: 'history-car.html',
})
export class HistoryCarPage {
  history:any=null;
  dateDebut:any=null;
  datefin:Date=new Date();

  constructor(private view:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryCarPage');
  }

  goBack(){
    this.view.dismiss();
  }
  cancel(){
    this.view.dismiss();
  }

}
