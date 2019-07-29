import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../servicios/prueba.service';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  peliculas: any[] = [];

  // CON ESTE CONSTRUCTOR IMPORTAMOS EL SERVICIO
  // tslint:disable-next-line: variable-name
  constructor(private _miServicio1: PruebaService) {

  }

  ngOnInit() {
  
    this.peliculas = this._miServicio1.getPeliculas();

    console.log(this.peliculas);
    
  }

}
