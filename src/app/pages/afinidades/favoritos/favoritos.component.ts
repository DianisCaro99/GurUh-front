import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { ContentDataService } from "../../../services/content.data.service";

@Component({
  selector: "ngx-favoritos",
  templateUrl: "./favoritos.component.html",
  styleUrls: ["./favoritos.component.scss"],
})
export class FavoritosComponent implements OnInit {
  ngOnInit() {
    console.log("entra acá");

    this.contentService
      .getContents()
      .toPromise()
      .then((res) => {
        console.log(res["data"]["data"]);
      });
  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: "Id",
        type: "String",
      },
      name: {
        title: "nombre",
        type: "string",
      },
      category: {
        title: "Categoría",
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
        title: "Url",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private contentService: ContentDataService) {
    this.contentService
      .getContents()
      .toPromise()
      .then((res) => {
        this.source.load(res["data"]["data"]);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
