import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminControllerComponent } from './admin-controller/admin-controller.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateCharityComponent } from './update-charity/update-charity.component';
import { UpdateNgoComponent } from './update-ngo/update-ngo.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { ModelModule } from '../model/model.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [AdminControllerComponent, UpdateCharityComponent, UpdateNgoComponent, UpdateDonorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ModelModule,
    PipesModule
  ],
  exports : [
    AdminControllerComponent, UpdateCharityComponent, UpdateNgoComponent, UpdateDonorComponent
  ]
})
export class AdminControlModule { }

