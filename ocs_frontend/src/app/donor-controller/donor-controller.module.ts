import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorControlComponent } from './donor-control/donor-control.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { DonationFormComponent } from './donation-form/donation-form.component';



@NgModule({
  declarations: [DonorControlComponent, UpdateDonorComponent, DonationFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    DonorControlComponent,
    UpdateDonorComponent
  ]
})
export class DonorControllerModule { }
