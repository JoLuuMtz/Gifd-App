import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';


@Component({
  selector: 'app-search',

  template: `
  <h5 class ="text-white">Search Gifs</h5>
  <input  class="form-control" type="text"
  placeholder="Search your favory Gifs about anythings..."
    #searchInput (keyup.enter)="searchGifs()">

`
})
export class SearchComponent {

  constructor(private _gifService: GifService) { }

  @ViewChild('searchInput') // obtiene una referencia al elemento del DOM
  xd!: ElementRef<HTMLInputElement>;

  searchGifs() {

    if (this.xd.nativeElement.value === '') {
      alert('Please enter a search term');
      return;
    }
    const tag = this.xd.nativeElement.value;

    // console.log(tag);

    this.xd.nativeElement.value = '';

    this._gifService.Search(tag);

    this._gifService.GetGifs(tag);


  }



}
