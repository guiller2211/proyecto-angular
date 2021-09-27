import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { adopcionVista } from '../User/adopcionVista';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  
  ngOnInit(): void {
    this.getSolicitudAdopcion();
  }

  
  adopcion: adopcionVista[]  = [];
  idUsuario = localStorage.getItem("idUser");
  resultadoAceptar: number;

  getSolicitudAdopcion() {
    this.usuarioService.getSolicitudAdopcion(this.idUsuario).subscribe(
      usuario => this.adopcion = usuario
    )
  }

  aceptarSolicitud(id:string){
    this.usuarioService.aceptarSolicitudAdopcion(id).subscribe(
      result => {

        if (result === 1) {

          alert("Gracias por aceptar la solicitud, el usuario adoptante sera contactado");

        } else {
          alert("No fue posible aceptar, esta mascota ya se encuentra en proceso de ser entregada.")
        }


      }
    )
  }

}



