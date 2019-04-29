import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryCarPage } from './history-car';

@NgModule({
  declarations: [
    HistoryCarPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryCarPage),
  ],
})
export class HistoryCarPageModule {}
