import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "app-favoritas",
  templateUrl: "./favoritas.component.html",
  styleUrls: ["./favoritas.component.scss"],
})
export class FavoritasComponent implements OnInit {
  constructor(private dataService: DataService, private toastr: NbToastrService) {}
  misContenidos;
  ngOnInit(): void {
    this.dataService
      .getMyContents()
      .toPromise()
      .then((resp) => {
        console.log(resp["data"][0]["contents"]);
        this.misContenidos = resp["data"][0]["contents"];
      });
  }
  eliminar(id: string) {
    this.dataService
      .deleteContentPreference(id)
      .toPromise()
      .then((resp) => {
        this.toastr.show("El contenido fue eliminado de tus favoritos", "Éxito", {destroyByClick: true, preventDuplicates: true, status:"success", icon:"checkmark", iconPack:"eva"});
        this.dataService
          .getMyContents()
          .toPromise()
          .then((resp) => {
            console.log(resp["data"][0]["contents"]);
            this.misContenidos = resp["data"][0]["contents"];
          });
      });
  }
}
