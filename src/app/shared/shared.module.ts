import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './lazy-imgage/lazy-imgage.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LazyImageComponent

  ],
  imports: [
    CommonModule,

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
