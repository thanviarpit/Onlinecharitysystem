import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { NgoListComponent } from './ngo-list/ngo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoryListComponent, DonorListComponent, NgoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CategoryListComponent, DonorListComponent, NgoListComponent],
})
export class ListModule { }
