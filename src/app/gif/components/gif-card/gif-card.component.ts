import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html'
})
export class GifCardComponent implements OnInit {

  @Input('gif-card')
  gifs: any = [];

  // aun no se que hace esto
  ngOnInit(): void {
    if (!this.gifs) {
      throw new Error('No hay gifs');
    }
  }

  // guarda el objeto gif en el local storage
  
  SaveData() {
    localStorage.setItem('gifs', JSON.stringify(this.gifs));
  }
}
