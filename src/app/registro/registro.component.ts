import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Region } from '../User/region'
import { Comuna } from '../User/comuna'
import { Provincia } from '../User/provincia'
import { UsuarioService } from '../servicios/usuario.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myRegion: Region[] = [];

  myComuna: Comuna[] = [];



  constructor(private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.buscarRegion()
  }

  ID: number;
  Nombre: String;
  Apellido: String;
  Fecha: Date;
  Genero: String;
  Correo: string;
  Password: string;
  id_COMUNA: number;




  Region: any;
  Abreviatura: string;
  Capital: string;


  Comuna: string;
  Provincia_ID: string;

  Provincia: string;
  Region_ID: string;

  selectRegion: number;


  columnasTabla: String[] = [
  ]


  crear() {


    let miUsuario: Usuario = {
      id: this.ID,
      nombre: this.Nombre,
      apellido: this.Apellido,
      fecha: this.Fecha,
      genero: this.Genero,
      correo: this.Correo,
      password: this.Password,
      id_COMUNA: this.id_COMUNA,
      region: this.Region,
      comuna: this.Comuna,

    }
 console.log(miUsuario)
   this.usuarioService.crearUsuario(miUsuario).subscribe(
      res => {
        alert("Usuario creado")
        console.log(res)
      },
      err => {
        alert("Correo en uso")
        console.log(err)
      }
    )



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



}
