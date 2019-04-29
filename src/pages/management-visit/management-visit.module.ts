import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagementVisitPage } from './management-visit';

@NgModule({
  declarations: [
    ManagementVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagementVisitPage),
  ],
})
export class ManagementVisitPageModule {}
