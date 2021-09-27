import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Mascota } from '../User/mascota';
@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  myMascota: Mascota[] = [];

  constructor(private usuarioService: UsuarioService) { }
  pagina = 0
  pagina2 = 1
  pagina3 = 2
  pagina4 = 3
  pagina5 = 4
  pagina6 = 5
  pagina7 = 6
  pagina8 = 7

  ngOnInit(): void {
    this.buscarMascota();
  }
  nosotross() {
    location.href = "nosotros";
  }
registraMascota(){
  location.href="mascotasr";
  
}
  adoptame(indice) {
    switch (indice) {
      case "0":
        this.pagina++;
        location.href = "mascotas/" + this.pagina;
        break;
      case "1":
        this.pagina2++;
        location.href = "mascotas/" + this.pagina2;
        break;
      case "2":
        this.pagina3++;
        location.href = "mascotas/" + this.pagina3;
        break;
      case "3":
        this.pagina4++;
        location.href = "mascotas/" + this.pagina4;
        break;
      case "4":
        this.pagina5++;
        location.href = "mascotas/" + this.pagina5;
        break;
      case "5":
        this.pagina6++;
        location.href = "mascotas/" + this.pagina6;
        break;
      case "6":
        this.pagina7++;
        location.href = "mascotas/" + this.pagina7;
        break;
      case "7":
        this.pagina8++;
        location.href = "mascotas/" + this.pagina8;
        break;
     

    }


  }

  buscarMascota() {
    this.usuarioService.getMascota().subscribe(
      Mascota => {
     
         this.myMascota = Mascota;

         console.log(Mascota)

         }
    )
  }
  cerrarSesion(){
    location.href="#"
  }
}
