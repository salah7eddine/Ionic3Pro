import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCarburantPage } from './add-carburant';

@NgModule({
  declarations: [
    AddCarburantPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCarburantPage),
  ],
})
export class AddCarburantPageModule {}
