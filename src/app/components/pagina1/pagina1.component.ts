import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../servicios/prueba.service';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _miservicio1: PruebaService) {

  }

  ngOnInit() {
  }

}
