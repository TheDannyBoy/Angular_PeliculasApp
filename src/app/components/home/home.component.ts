import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  kids: any;

  constructor(
    public _ps: PeliculasService
  ) {
    this._ps.getCartelera()
        .subscribe( data => {
          console.log("Cartelera:", data.results);
          this.cartelera = data.results;
        } )

    this._ps.getPopulares()
        .subscribe( data => {
          console.log("Populares:", data.results);
          this.populares = data.results;
        } )

    this._ps.getKidsPopulares()
        .subscribe( data => {
          console.log("Kids:", data.results);
          this.kids = data.results;
        } )

  }

  ngOnInit() {
  }

}
