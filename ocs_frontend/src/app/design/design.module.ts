import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, FooterComponent, AboutusComponent, ContactComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [HeaderComponent, HomeComponent, FooterComponent,  AboutusComponent, ContactComponent]
})
export class DesignModule { }


