import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  termino: string = "";
  peliculas: any;

  constructor(
    private _ps: PeliculasService
  ) {}

  ngOnInit() {
  }

  public getPelicula( clave: string ){
    if( !clave ){
      return;
    }

    this.termino = clave;
    console.log(this.termino, this.termino.length);
    this._ps.buscarNombrePelicula( this.termino )
        .subscribe( data => {
          console.log("Peliculas por búsqueda:", data.results);
          this.peliculas = data.results;
        } );
  }

}
