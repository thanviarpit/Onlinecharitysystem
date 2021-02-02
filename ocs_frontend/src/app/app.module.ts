import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';
import { EntryModule } from './entry/entry.module';
import { RegistrationModule } from './registration/registration.module';
import { ListModule } from './list/list.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModelModule } from './model/model.module';
import { AdminControlModule } from './admin-control/admin-control.module';
import { NgoControllerModule } from './ngo-controller/ngo-controller.module';
import { DonorControllerModule } from './donor-controller/donor-controller.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DesignModule,
    EntryModule,
    RegistrationModule,
    ListModule,
    ModelModule,
    AdminControlModule,
    NgoControllerModule,
    DonorControllerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
