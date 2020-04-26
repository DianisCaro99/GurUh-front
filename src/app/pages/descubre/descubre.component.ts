import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { CustomRendererComponent } from "./custom.component";

@Component({
  selector: "app-descubre",
  templateUrl: "./descubre.component.html",
  styleUrls: ["./descubre.component.scss"],
})
export class DescubreComponent implements OnInit {
  constructor(private dataService: DataService) {}
  source;
  ngOnInit(): void {
    this.dataService
      .getAllContents()
      .toPromise()
      .then((resp) => {
        this.source = resp["data"]["data"];
      });
  }

  settings = {
    actions: {
      columnTitle: "Marcar",
      add: false,
      edit: false,
      delete: false,

      custom: [
        {
          name: "favorito",
          title: '<i class="nb-star" title="Favorite"></i>',
          position: "right",
        },
      ],
    },

    columns: {
      category: {
        title: "Categoría",
        type: "string",
      },
      name: {
        title: "Nombre",
        type: "string",
      },

      description: {
        title: "Descripción",
        type: "string",
      },
      type: {
        title: "Tipo",
        type: "string",
      },
      url: {
        title: "URL",
        type: "custom",
        renderComponent: CustomRendererComponent,
      },
    },
  };

  agregar(event) {
    this.dataService
      .addContentPreference(event.data._id, event.data.category)
      .toPromise()
      .then((resp) => {
        alert("Guardado en favoritos");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
