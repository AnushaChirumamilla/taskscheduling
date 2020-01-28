import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignorPage } from './assignor';

@NgModule({
  declarations: [
    AssignorPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignorPage),
  ],
})
export class AssignorPageModule {}
