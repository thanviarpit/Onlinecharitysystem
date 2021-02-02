import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoControlComponent } from './ngo-control/ngo-control.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateNgoComponent } from './update-ngo/update-ngo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgoControlComponent, UpdateNgoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    NgoControlComponent
  ]
})
export class NgoControllerModule { }
