import { ViewController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-car-details',
  templateUrl: 'car-details.html'
})
export class CarDetailsPage implements OnInit {

  infoCar = null;
  carburantRoot = 'CarburantPage'
  vidangeRoot = 'VidangePage'
  dCirculationRoot = 'DCirculationPage'
  tdbRoot = 'TdbPage'


  constructor(private view:ViewController, private navParams: NavParams,public navCtrl: NavController) {}

  ngOnInit() {
    this.infoCar = this.navParams.get('data');
    console.log(this.infoCar);
  }
}
