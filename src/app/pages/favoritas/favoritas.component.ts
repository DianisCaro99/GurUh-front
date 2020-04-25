import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-favoritas",
  templateUrl: "./favoritas.component.html",
  styleUrls: ["./favoritas.component.scss"],
})
export class FavoritasComponent implements OnInit {
  constructor(private dataService: DataService) {}
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
        console.log("eliminado");
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
