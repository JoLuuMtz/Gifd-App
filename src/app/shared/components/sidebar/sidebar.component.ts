import { Component } from '@angular/core';
import { GifService } from '../../../gif/services/gif.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private _gifService: GifService) { }


  listHistory(): string[] {
    return this._gifService.GetHistory;
  }


  ReSearch(tag: string): void {

    this._gifService.GetGifs(tag);
    this._gifService.Search(tag);
    localStorage.setItem('tag', tag);

  }

}
