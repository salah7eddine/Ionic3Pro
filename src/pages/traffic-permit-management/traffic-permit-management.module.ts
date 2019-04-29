import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrafficPermitManagementPage } from './traffic-permit-management';

@NgModule({
  declarations: [
    TrafficPermitManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(TrafficPermitManagementPage),
  ],
})
export class TrafficPermitManagementPageModule {}
