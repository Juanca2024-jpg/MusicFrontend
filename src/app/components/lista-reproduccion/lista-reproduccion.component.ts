import { Component } from '@angular/core';
import { MostrarListasComponent } from '../mostrar-listas/mostrar-listas.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-lista-reproduccion',
  imports: [MostrarListasComponent, NgIf],
  templateUrl: './lista-reproduccion.component.html',
  styleUrl: './lista-reproduccion.component.css'
})
export class ListaReproduccionComponent {
  openModal = false;
  abrirModal(){
    this.openModal = true;
  }
  cerrarModal(){
    this.openModal= false;
  }
}
