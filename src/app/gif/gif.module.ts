import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './page/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';



@NgModule({
  imports: [ // importa el modulo de angular que se necesita para el modulo
    CommonModule,
    SharedModule,
    FormsModule,

  ],
  exports: [
    HomePageComponent

  ],

  declarations: [// agrega el componente a la lista de declaraciones del modulo
    HomePageComponent, SearchComponent, ListGifsComponent, GifCardComponent
  ],
  providers: [],
})
export class GifsModule{ }
