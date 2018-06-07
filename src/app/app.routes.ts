import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'detalle/:id', component: DetallePeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
