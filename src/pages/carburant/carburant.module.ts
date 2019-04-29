import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarburantPage } from './carburant';

@NgModule({
  declarations: [
    CarburantPage,
  ],
  imports: [
    IonicPageModule.forChild(CarburantPage),
  ],
})
export class CarburantPageModule {}
