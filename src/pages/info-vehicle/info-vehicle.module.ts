import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoVehiclePage } from './info-vehicle';

@NgModule({
  declarations: [
    InfoVehiclePage,
  ],
  imports: [
    IonicPageModule.forChild(InfoVehiclePage),
  ]
})
export class InfoVehiclePageModule {}
