import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx'  //  Map

@Injectable()
export class PeliculasService {

  private apikey: string = "d571612177e7351ca5b5dce5a2197d79"
  private urlMoviedb: string = "https://api.themoviedb.org/3"

  constructor(
    private _jsonp: Jsonp
  ) { }


  public getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
        .map( res => res.json() );

  }

  public getKidsPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=MX&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
        .map( res => res.json() );

  }


  public getCartelera(){

    let fecha: string[] = this.generarFecha().split('^');
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fecha[0] }&primary_release_date.lte=${ fecha[1] }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
        .map( res => res.json() );

  }

  public buscarPelicula( id: number ){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
        .map( res => res.json() );

  }

  public buscarNombrePelicula( termino: string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ termino }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
        .map( res => res.json() );

  }

  public generarFecha(){

    let currentDate = new Date();
    let dia = currentDate.getDate();
    let mes = currentDate.getMonth() + 1;
    let anio = currentDate.getFullYear();

    return `${anio}-${mes}-${dia}^${anio}-${mes+1}-${dia}`;

  }

}
