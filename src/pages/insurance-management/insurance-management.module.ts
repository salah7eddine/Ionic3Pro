import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuranceManagementPage } from './insurance-management';

@NgModule({
  declarations: [
    InsuranceManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuranceManagementPage),
  ],
})
export class InsuranceManagementPageModule {}
