import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../User/usuario';
import { Region } from '../User/region';
import { Mascota } from '../User/mascota';
import { Adopcion } from '../User/adopcion';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {


  constructor(private usuarioService:UsuarioService,private router:Router) { }

  miUsuario: Usuario[]  = [];
  miMascota: Mascota[] = [];
  miAdopcion: Adopcion[] = [];

  Nombre: String;
  Apellido: String;
  Fecha: Date;
  Genero: String;
  Correo: string;
  Password: string;

  Provincia: string;
  Region_ID: string;

  Region: string;
  Abreviatura: string;
  Capital: string;

  Comuna: string;
  Provincia_ID: string;

    nombre: string;
    estatura: string;
    edad: Number;
    sexo: string;
    imagen: string;
    descripcion: string;
    region: string;
    comuna: string;

    id: Number;
    id_Mascota : Number;
    id_Usuario: Number;
    estado: String;

  columnasTabla: String[] = [
    "id",
    "nombre",
    "apellido",
    "fecha",
    "correo",
    "password",
    "genero"
  ]

  columasTablas2: string[] = [
    "id",
    "nombre",
    "estatura",
    "edad",
    "sexo",
    "descripcion",
    "region",
    "comuna"
  ]

  columasTablas3: string[] = [
    "id",
    "id_Mascota",
    "id_Usuario",
    "estado",
  ]

  ngOnInit(): void {
    this.buscar();
    this.buscarMascota();
    this.buscarAdopcion();
  }
////////////////////////////////////////////////////////////////////////////////
  buscar() {
    console.log("se imprime")
    this.usuarioService.getUsuario().subscribe(
      usuario => this.miUsuario = usuario
    )
  }


  eliminar(correo:string){
    console.log(correo);
    this.usuarioService.deleteUsuario(correo).subscribe(data=> this.buscar());
  }
  /////////////////////////////////////////////////////////////////////////////////
  buscarMascota() {
    console.log("se imprime")
    this.usuarioService.getMascota().subscribe(
      mascota => this.miMascota = mascota
    )
  }

  eliminarMascota(id:Number){
    console.log(id);
    this.usuarioService.deleteMascota(id).subscribe(data=> this.buscarMascota());
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  buscarAdopcion(){
    console.log("se imprime")
    this.usuarioService.getAdopcion().subscribe(
      adopcion => this.miAdopcion = adopcion
    )
  }

  eliminarAdopcion(id:Number){
    console.log(id);
    this.usuarioService.deleteAdopcion(id).subscribe(data=> this.buscarAdopcion());
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  
  cerrarSesion(){
    location.href="#"
  }

}

  

