import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Data, GIF } from '../interfaces/gif.interfaces';




@Injectable({
  providedIn: 'root'
})
export class GifService {

  private readonly API_KEY: string = 's1wI9VyKtwfOCNNgKne6VjQQS1u1glyR' // api key de giphy

  private _history: string[] = []; // almacena el historial de busqueda de gifs en la aplicacion

  public respuesta: Data[] = []; // arreglo de gifs que se obtienen de la peticion

  private url = 'https://api.giphy.com/v1/gifs'; // url de la api de giphy

  constructor(private http: HttpClient) {
    // Obtiene el historial de busqueda de gifs en la aplicacion

    this.GetData();

  }



  get GetHistory() {// retorna el historial de busqueda de gifs en la aplicacion
    return [...this._history];
  }

  // guarda el historial de busqueda de gifs en el local storage
  private SaveData(): void {

    localStorage.setItem('Historial', JSON.stringify(this._history));
  }

  // recupera la data del local storage
  private GetData(): void {

    const history = localStorage.getItem('Historial');

    if (!history) return

    this._history = JSON.parse(history);

    this.GetGifs(localStorage.getItem('tag') || '');

  }
  private Organization(tag: string): void {

    tag = tag.trim().toLocaleLowerCase();

    // valida si el tag ya existe en el historial
    if (this._history.includes(tag)) {

      // si existe lo elimina del historial
      this._history = this._history.filter((tagHistory) => tagHistory != tag);

    }
    //  y lo vuelve a poner en la primera posicion
    // si no existe, lo agrega en la primera posicion
    this._history.unshift(tag);

    this.SaveData();

    this._history = this._history.splice(0, 10);

  }

  // metodo que se encarga de buscar gifs en la api de giphy
  Search(tag: string): void {
    // valida si el tag es vacio

    if (tag.trim().length === 0) return;

    this.Organization(tag);

  }


  GetGifs(tag: string): void {



    // paramtros de la peticion
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('q', tag)
      .set('limit', '20');

    // peticion get a la api de giphy
    this.http.get<GIF>(`${this.url}/search`, { params }).subscribe((
      resp) => {
      this.respuesta = resp.data;



    }
    );




  }


}





