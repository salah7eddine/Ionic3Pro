import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VignetteManagementPage } from './vignette-management';

@NgModule({
  declarations: [
    VignetteManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(VignetteManagementPage),
  ],
})
export class VignetteManagementPageModule {}
