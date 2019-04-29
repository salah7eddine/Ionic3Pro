import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TdbPage } from './tdb';

@NgModule({
  declarations: [
    TdbPage,
  ],
  imports: [
    IonicPageModule.forChild(TdbPage),
  ],
})
export class TdbPageModule {}
