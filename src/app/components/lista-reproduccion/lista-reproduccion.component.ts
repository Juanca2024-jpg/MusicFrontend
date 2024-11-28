import { Component, OnInit } from '@angular/core';
import { MostrarListasComponent } from '../mostrar-listas/mostrar-listas.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lista-reproduccion',
  imports: [MostrarListasComponent, NgIf, NgFor, FormsModule],
  templateUrl: './lista-reproduccion.component.html',
  styleUrl: './lista-reproduccion.component.css'
})
export class ListaReproduccionComponent implements OnInit {
  canciones = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", album: "A Night at the Opera", anno: 1975, genero: "Rock",},
    { titulo: "Billie Jean", artista: "Michael Jackson", album: "Thriller", anno: 1982, genero: "Pop" ,},
    { titulo: "Hotel California", artista: "Eagles", album: "Hotel California", anno: 1976, genero: "Rock" ,},
    { titulo: "Shape of You", artista: "Ed Sheeran", album: "÷ (Divide)", anno: 2017, genero: "Pop" ,},
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", album: "Nevermind", anno: 1991, genero: "Grunge" ,},
    { titulo: "Rolling in the Deep", artista: "Adele", album: "21", año: 2010, genero: "Soul/Pop" ,},
    { titulo: "Imagine", artista: "John Lennon", album: "Imagine", año: 1971, genero: "Soft Rock" ,},
    { titulo: "Blinding Lights", artista: "The Weeknd", album: "After Hours", anno: 2020, genero: "Synth-Pop" ,},
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", album: "Led Zeppelin IV", anno: 1971, genero: "Hard Rock" ,},
    { titulo: "Despacito", artista: "Luis Fonsi ft. Daddy Yankee", album: "Vida", anno: 2017, genero: "Reguetón" ,},
    { titulo: "Sweet Child o' Mine", artista: "Guns N' Roses", album: "Appetite for Destruction", anno: 1987, genero: "Hard Rock" ,},
    { titulo: "Uptown Funk", artista: "Mark Ronson ft. Bruno Mars", album: "Uptown Special", anno: 2014, genero: "Funk/Pop" ,},
    { titulo: "Satisfaction", artista: "Rolling Stones", album: "Out of Our Heads", anno: 1965, genero: "Rock",},
    { titulo: "Wonderwall", artista: "Oasis", album: "(What's the Story) Morning Glory?", anno: 1995, genero: "Britpop",},
  ];
  cancionesSeleccionadas:any = [];
  mostrarBotones:any = [];
  openModal = false;
  abrirModal(){
    this.openModal = true;
  }
  cerrarModal(){
    this.openModal= false;
  }
  openModalTable = false;
  abrirModalTable(){
    this.openModalTable= true;
  }
  cerrarModalTable(){
    this.openModalTable = false;
  }
  agregarCancion(cancion:any, index:number){
    this.mostrarBotones[index] = true;
    this.cancionesSeleccionadas.push(cancion);
  }
  quitarCancion(cancion:any, i:number){
    this.mostrarBotones[i] = false;
    const index = this.cancionesSeleccionadas.findIndex((can: { titulo: any; }) => can.titulo === cancion.titulo);
    if (index !== -1) {
      this.cancionesSeleccionadas.splice(index, 1);
    }
  }
  listaReproduccion:any = [];
  nombre:string = '';
  descripcion:string = '';
  agregarLista(){
    if(this.nombre !== '' && this.descripcion!==''){
      this.listaReproduccion.push({
        nombre: this.nombre,
        descripcion: this.descripcion,
        canciones: this.cancionesSeleccionadas
      });
    }
    console.log(this.listaReproduccion);
  }
  ngOnInit(){
    for(let i = 0; i<this.canciones.length; i++){
      this.mostrarBotones[i] = false;
    }
  }
}
