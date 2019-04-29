import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkManagementPage } from './park-management';

@NgModule({
  declarations: [
    ParkManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkManagementPage),
  ],
})
export class ParkManagementPageModule {}
