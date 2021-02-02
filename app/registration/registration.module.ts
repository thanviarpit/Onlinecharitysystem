import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { NgoRegisterComponent } from './ngo-register/ngo-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModelModule } from '../model/model.module';



@NgModule({
  declarations: [DonorRegisterComponent,NgoRegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ModelModule
  ],
  exports: [DonorRegisterComponent,NgoRegisterComponent],
})
export class RegistrationModule { }
