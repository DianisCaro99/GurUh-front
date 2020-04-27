import { Component, ViewChild, ElementRef } from "@angular/core";
import { RecomendacionesDataService } from "../../services/recomendacion.data.service";

@Component({
  selector: "app-recomendaciones",
  templateUrl: "./recomendaciones.component.html",
  styleUrls: ["./recomendaciones.component.scss"],
})
export class RecomendacionesComponent {
  recomendacion = null;
  constructor(private recomService: RecomendacionesDataService) {}
  @ViewChild("username") username: ElementRef;
  recomendacionClick(event) {
    console.log(this.username.nativeElement.value);
    this.recomService
      .getRecomendaciones(this.username.nativeElement.value)
      .toPromise()
      .then((res) => {
        console.log(res);
        this.recomendacion = res;
      });
  }
}
