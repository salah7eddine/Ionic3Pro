import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionParcPage } from './gestion-parc';

@NgModule({
  declarations: [
    GestionParcPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionParcPage),
  ],
})
export class GestionParcPageModule {}
