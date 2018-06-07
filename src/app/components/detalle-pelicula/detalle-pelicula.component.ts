import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styles: []
})
export class DetallePeliculaComponent implements OnInit {

  id: number;
  pelicula: Object = {};

  constructor(
    public _ps: PeliculasService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params
        .subscribe( params => {
          this._ps.buscarPelicula(params['id'])
            .subscribe( data => {
              console.log("Resultados pelicula", data);
              this.pelicula = data;
            } )
        } );


  }

  ngOnInit() {
  }


}
