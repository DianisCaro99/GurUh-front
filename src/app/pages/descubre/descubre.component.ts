import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-descubre",
  templateUrl: "./descubre.component.html",
  styleUrls: ["./descubre.component.scss"],
})
export class DescubreComponent implements OnInit {
  constructor(private dataService: DataService) {}
  contenidos;
  ngOnInit(): void {
    this.dataService
      .getAllContents()
      .toPromise()
      .then((resp) => {
        this.contenidos = resp["data"]["data"];
      });
  }

  agregar(id, category) {
    this.dataService
      .addContentPreference(id, category)
      .toPromise()
      .then((resp) => {
        console.log("Agregado");
      });
  }
}
