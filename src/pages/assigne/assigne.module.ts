import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignePage } from './assigne';

@NgModule({
  declarations: [
    AssignePage,
  ],
  imports: [
    IonicPageModule.forChild(AssignePage),
  ],
})
export class AssignePageModule {}
