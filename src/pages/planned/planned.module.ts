import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlannedPage } from './planned';

@NgModule({
  declarations: [
    PlannedPage,
  ],
  imports: [
    IonicPageModule.forChild(PlannedPage),
  ],
})
export class PlannedPageModule {}
