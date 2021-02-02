import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveOrNotPipe } from './active-or-not.pipe';
import { ApprovedOrNotPipe } from './approved-or-not.pipe';



@NgModule({
  declarations: [ActiveOrNotPipe, ApprovedOrNotPipe],
  imports: [
    CommonModule
  ],
  exports : [ActiveOrNotPipe, ApprovedOrNotPipe]
})
export class PipesModule { }
