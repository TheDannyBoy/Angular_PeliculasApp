import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Rutas
import { APP_ROUTING } from './app.routes';
import { UrlimagenPipe } from './pipes/urlimagen.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaComponent,
    DetallePeliculaComponent,
    UrlimagenPipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
