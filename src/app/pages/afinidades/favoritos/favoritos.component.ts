import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { ContentDataService } from "../../../services/content.data.service";
import { CustomRendererComponent } from './custom.component';

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
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      columnTitle: 'Eliminar',
      add:false,
      edit:false,

  
    
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
        title:"URL",
        type: 'custom',
        renderComponent: CustomRendererComponent,
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
    if (window.confirm("OnDeleteConfirm: Acá toca llamar el método del back")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
