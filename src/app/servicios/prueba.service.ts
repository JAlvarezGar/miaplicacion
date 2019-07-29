import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  // array para utilizar con el servicio
  private peliculas: any [] = [
    {
      pelicula: 'Batman v. Superman',
      director: 'Zack Snider',
      anio: '2016'
    },
    {
      pelicula: 'La verdad duele',
      director: 'Will Smith',
      anio: '2015'
    },
    {
      pelicula: 'Una historia real',
      director: 'Desconocido',
      anio: '2014'
    }
  ];

  constructor() {
    console.log('servicio listo para ser insertado');
  }

  // creo un metodo get para poder acceder al array
  // desde un componente.
  // tslint:disable-next-line: align
  public getPeliculas() {

    return this.peliculas;
  }
}
