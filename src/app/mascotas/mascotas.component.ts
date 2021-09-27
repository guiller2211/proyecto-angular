import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Region } from '../User/region'
import { Comuna } from '../User/comuna'
import { UsuarioService } from '../servicios/usuario.service'
import { Router } from '@angular/router';
import { Mascota } from '../User/mascota';
import { Adopcion } from '../User/adopcion';
@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  myMascota: import("../User/mascota").Mascota[];
  
  constructor(private usuarioService: UsuarioService, private router:Router) { }
  
  public login: boolean = false
  
  myRegion: Region[] = [];

  myComuna: Comuna[] = [];

  miMascota:Mascota[] = [];

  miAdopcion:Adopcion [] = [];

  ngOnInit(): void {
    this.buscarRegion(),
        this.busquedaMascota()
  }



     id: Number;
    Nombre: string;
    Estatura: string;
    Edad: Number;
    Sexo: string;
    Imagen: string;
    Descripcion: string;
    Region: any;
    Comuna: string;
    id_Comunas: Number;


  Abreviatura: string;
  Capital: string;

  Provincia_ID: string;

  Provincia: string;
  Region_ID: string;


  columnasTabla: String[] = [
    "id",
    "nombre",
    "estatura",
    "edad",
    "sexo",
    "descripcion",
    "region",
    "comuna"
  ]

  crear() {


    let miMascota: Mascota = {
      id: this.id,
      nombre: this.Nombre,
      estatura: this.Estatura,
      edad: this.Edad,
      sexo: this.Sexo,
      imagen: this.Imagen,
      descripcion: this.Descripcion,
      region: this.Region,
      comuna: this.Comuna,
      id_Comunas: this.id_Comunas

    }
  }
  registraMascota(){
    location.href="mascotasr";
    
  }
  cerrarSesion(){
    location.href="#"
  }

  buscarRegion() {

    this.usuarioService.getRegion().subscribe(

      Region => {
        this.myRegion = Region;
       


        this.buscarid();
        console.log(Region)
      }
    )
  }




  buscarid() {
    console.log(this.Region);
    this.usuarioService.getlistaregioncomuna(this.Region).subscribe(
      Region => {

        this.myComuna = Region; console.log(Region)
      }
    )

  }

  buscarAdopcion(){
    console.log("se imprime")
    this.usuarioService.getAdopcion().subscribe(
      adopcion => this.miAdopcion = adopcion
    )
  }


  busquedaMascota(){
    console.log('se imprime')
    this.usuarioService.getconsultaMascota( this.Estatura, this.Sexo, this.Region, this.Comuna).subscribe(
    mascota =>  { this.miMascota = mascota; console.log(mascota) }
  
    )
  }

}
  