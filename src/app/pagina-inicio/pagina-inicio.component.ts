import { Component, OnInit } from '@angular/core';
import { Usuario } from '../User/usuario'
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  myMascota: import("../User/mascota").Mascota[];

  constructor(private usuarioService:UsuarioService, private router: Router) { }
  public login: boolean = false

  ngOnInit(): void {
    this.ingresar();
    this.buscarMascota();
  }
correo:string;
password:string;



  registrar() {
    location.href = "registro";
  }

  ID: Number;
  Nombre: String;
  Apellido: String;
  Fecha: Date;
  Genero: string;
  Correo: string;
  Password: string;
  id_COMUNA: Number;




  Region: any;
  Abreviatura: string;
  Capital: string;


  Comuna: string;
  Provincia_ID: string;

  Provincia: string;
  Region_ID: string;


  columnasTabla: String[] = [
  ]
  miUsuario: Usuario[] = [];
  
  ingresar() {
    if (this.correo && this.password)
    this.usuarioService.getExisteUsuario(this.correo, this.password).subscribe(
      data => {
        console.log(data)
        if (typeof data !== "undefined") {
          localStorage.setItem('idUser', data.id.toString());
          location.href = "acceso"
        } else if (this.correo == 'administrador@gmail.com' && this.password == '123456'){
          location.href = "table"
        } else {
          alert("Usuario invalido")
        }


      },
      err => console.log(err)
    )

  }
  goRegister(){
    this.router.navigate(['registro']);
  }

  goList(){
    this.router.navigate(['acceso']);
  }



  nosotross() {
    location.href = "nosotros";
  }
  buscarMascota() {
    this.usuarioService.getMascota().subscribe(
      Mascota => {
     
         this.myMascota = Mascota;

         console.log(Mascota)

         }
    )
  }
  miLista: Usuario[] = [];
  columnaTabla: string[] = [
    "correo",
    "password"
  ]

  olvidoPassword(){
    location.href='editar'
  }
}