import { Component, Input} from '@angular/core';
import { Data } from '../../interfaces/gif.interfaces';



@Component({
  selector: 'app-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrl: './list-gifs.component.css'

})
export class ListGifsComponent {

  @Input('listaDeGif') gifs: Data[]= []; // recibe la lista de gifs que se obtienen de la peticion

}
