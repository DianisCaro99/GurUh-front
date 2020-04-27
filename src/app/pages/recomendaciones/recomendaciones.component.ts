import { Component, ViewChild, ElementRef } from "@angular/core";
import { RecomendacionesDataService } from "../../services/recomendacion.data.service";

@Component({
  selector: "app-recomendaciones",
  templateUrl: "./recomendaciones.component.html",
  styleUrls: ["./recomendaciones.component.scss"],
})
export class RecomendacionesComponent {
  recomendacion = null;
  showMessages: any = {};
  errors: string[] = [];
  constructor(private recomService: RecomendacionesDataService) {}
  @ViewChild("username") username: ElementRef;
  recomendacionClick(event) {
    
    this.errors = [];
    console.log(this.username.nativeElement.value);
    this.recomService
      .getRecomendaciones(this.username.nativeElement.value)
      .toPromise()
      .then((res) => {
        console.log(res);
        this.recomendacion = res;
      })
      .catch((err) => {
        this.showMessages.error = true;
        
        this.errors.push("Error, revisa que tu username esté bien escrito y que tu perfíl sea público");
      });
  }
  formatRecom(recomendacion){
    let ans='';
    switch(recomendacion){
      case "arqui":
        ans="Diseño y arquitectura"
        break;
      case "inge":
        ans="Ingeniería"
        break;
      case "eco":
        ans="Economía"
        break;
      case "admin":
        ans="Administración / Contaduría"
        break;
      case "derecho":
        ans="Derecho"
        break;
      case "arte":
        ans="Arte / Música"
        break;
      case "edu":
        ans="Educación"
        break;
      case "salud":
        ans="Ciencias de la salud"
        break;
      case "ciencias":
        ans="Ciencias naturales"
        break;
      case "sociales":
        ans = "Humanidades"
        break;
    }
    return ans

    
  }
}
