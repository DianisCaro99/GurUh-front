import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { CustomRendererComponent } from "./custom.component";
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "app-descubre",
  templateUrl: "./descubre.component.html",
  styleUrls: ["./descubre.component.scss"],
})
export class DescubreComponent implements OnInit {
  constructor(private dataService: DataService, private toastr: NbToastrService) {}
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
        this.toastr.show("Contenido agregado exitosamente a tus favoritos", "Éxito", {destroyByClick: true, preventDuplicates: true, status:"success", icon:"checkmark", iconPack:"eva"});
      })
      .catch((err) => {
        this.toastr.show("El contenido no pudo ser agregado correctamente, intenta nuevamente", "Error", {destroyByClick: true, preventDuplicates: true, status:"danger", icon:"alert-triangle", iconPack:"eva"});
      });
  }
}
