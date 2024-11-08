import { Component } from '@angular/core';

import { GifService } from '../../services/gif.service';
import { GIF } from '../../interfaces/gif.interfaces';
import { Data } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifService: GifService) { }


  get listaDeGif() { // obtiene la lista de gifs que se obtienen de la peticion
    return this.gifService.respuesta;
  }

  SaveData() {

  }

}
