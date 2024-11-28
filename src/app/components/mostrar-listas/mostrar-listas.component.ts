import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ListaReproduccionService } from '../../services/listaReproduccionService';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mostrar-listas',
  imports: [NgFor, NgIf, HttpClientModule],
  templateUrl: './mostrar-listas.component.html',
  styleUrl: './mostrar-listas.component.css'
})
export class MostrarListasComponent implements OnInit{
  constructor(private lista: ListaReproduccionService){}
  ngOnInit(): void {
    this.lista.getListaReproducciones().subscribe(
      data => {
        this.listaReproduccion = data;
      },
      error =>{
        console.log(error);
      }
    );
  }
  listaReproduccion:any = [];

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
