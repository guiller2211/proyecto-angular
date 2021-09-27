import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {
  MisDatos: Usuario[] = []
  datos: any;
  constructor(private usuarioService: UsuarioService) { }



  ngOnInit(): void {
    this.MyDate();
  }


  id: number;
  nombre: String;
  apellido: String;
  fecha: Date;
  genero: String;
  correo: string;
  password: string;
  id_COMUNA?: Number;
  region: String;
  comuna: String;

  selectID:any ;

  columnasTabla: String[] = [
    "id",
    "nombre",
    "apellido",
    "fecha",
    "correo",
    "password",
    "genero",
    "region",
    "comuna"
  ]

 
  
  MyDate() {

    if( localStorage.getItem("idUser")){
    let MyDatos = JSON.parse( localStorage.getItem("idUser"));
    
this.selectID= localStorage.getItem("idUser")
    console.log(MyDatos);
    }else{
      console.log("no existe")
    }


    this.usuarioService.getConsultaId(this.selectID).subscribe(
      data => {

        this.datos= data;
        document.getElementById("datos").innerHTML= localStorage.getItem('idUser');
        console.log(data);

      
      },

    )
  }

  registraMascota(){
    location.href="mascotasr";
    
  }
  cerrarSesion(){
    location.href="#"
  }

  editar(){
    location.href="editarPerfil"
  }
}