import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminControllerComponent } from './admin-control/admin-controller/admin-controller.component';
import { AboutusComponent } from './design/aboutus/aboutus.component';
import { ContactComponent } from './design/contact/contact.component';
import { HomeComponent } from './design/home/home.component';
import { DonorControlComponent } from './donor-controller/donor-control/donor-control.component';
import { LoginComponent } from './entry/login/login.component';
import { CategoryListComponent } from './list/category-list/category-list.component';
import { DonorListComponent } from './list/donor-list/donor-list.component';
import { NgoListComponent } from './list/ngo-list/ngo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { NgoControlComponent } from './ngo-controller/ngo-control/ngo-control.component';
import { DonorRegisterComponent } from './registration/donor-register/donor-register.component';
import { NgoRegisterComponent } from './registration/ngo-register/ngo-register.component';


const routes: Routes = [
  {
    path : '', component: HomeComponent
  },
  {
    path : 'home', component: HomeComponent
  },
  {
    path : 'about', component: AboutusComponent
  },
  {
    path : 'contact', component: ContactComponent
  },
  {
    path : 'login', component: LoginComponent
  },
  {
    path : 'donor', component: DonorRegisterComponent
  },
  {
    path : 'ngo', component: NgoRegisterComponent
  },
  {
    path : 'categorylist', component: CategoryListComponent
  },
  {
    path : 'donorlist', component: DonorListComponent
  },
  {
    path : 'ngolist', component: NgoListComponent
  },
  {
    path : 'adminController', component: AdminControllerComponent
  },
  {
    path : 'adminController/:username', component: AdminControllerComponent
  },
  {
    path : 'ngoController', component: NgoControlComponent
  },
  {
    path : 'ngoController/:username', component: NgoControlComponent
  },
  {
    path : 'donorController', component: DonorControlComponent
  },
  {
    path : 'donorController/:username', component: DonorControlComponent
  },
  {
    path : 'logout', component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
