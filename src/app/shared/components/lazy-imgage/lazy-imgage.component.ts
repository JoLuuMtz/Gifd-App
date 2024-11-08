import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'

})
export class LazyImageComponent implements OnInit {


  @Input()
  public url!: string;

  @Input()
  public alt: string = " ";

  public isLoaded: boolean = false;




  ngOnInit(): void {

    if (!this.url)
      throw new Error('No hay url');

  }

  // cuando la imagen este cargada se ejecuta
  isLoad() {

    setTimeout(() => {
      this.isLoaded = true;
      console.log(" imagen cargada ")

    }, 1000);


  }
}
