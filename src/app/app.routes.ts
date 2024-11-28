import { Routes } from '@angular/router';
import { ListaReproduccionComponent } from './components/lista-reproduccion/lista-reproduccion.component';
import { MostrarListasComponent } from './components/mostrar-listas/mostrar-listas.component';

export const routes: Routes = [
    {path: '', component: ListaReproduccionComponent},
    {path: 'mostrar-listas', component: MostrarListasComponent}
];
