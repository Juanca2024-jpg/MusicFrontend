import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mostrar-listas',
  imports: [NgFor, NgIf],
  templateUrl: './mostrar-listas.component.html',
  styleUrl: './mostrar-listas.component.css'
})
export class MostrarListasComponent {

  listaReproduccion:any = [
    {
      nombre: 'Lista 1',
      descripcion: 'Lista de canciones de spotify',
      canciones: [
        {
          "titulo": "+57",
          "artista": "karol g",
          "album": "nan",
          "anno": "2024",
          "genero": "reggeton"
          },
          {
            "titulo": "pepito",
            "artista": "epa colombia",
            "album": "nan",
            "anno": "2020",
            "genero": "nan"
          },
      ]
    },
    {
      nombre: 'Lista 2',
      descripcion: 'Lista de canciones de spotify',
      canciones: [
        {
          "titulo": "+57",
          "artista": "karol g",
          "album": "nan",
          "anno": "2024",
          "genero": "reggeton"
          },
          {
            "titulo": "pepito salvame",
            "artista": "epa colombia",
            "album": "nan",
            "anno": "2020",
            "genero": "nan"
          },
      ]
    }
  ];

  openModal = false;
  canciones:any = [];
  abrirModal(canciones: any){
    this.canciones = canciones;
    this.openModal = true;
  }
  cerrarModal(){
    this.openModal = false;
    this.canciones = [];
  }
  eliminarLista(index:number){
    this.listaReproduccion.splice(index, 1);
  }

}
