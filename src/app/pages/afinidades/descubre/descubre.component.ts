import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { ContentDataService } from "../../../services/content.data.service";
import { CustomRendererComponent } from './custom.component';

@Component({
  selector: "ngx-descubre",
  templateUrl: "./descubre.component.html",
  styleUrls: ["./descubre.component.scss"],
})
export class DescubreComponent implements OnInit {
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
    actions: {
      columnTitle: 'Marcar',
      add:false,
      edit:false,
      delete:false,
    
      custom:[
        {
          name: 'favorito',
          title:'<i class="ion-star" title="Favorite"></i>',
          position: 'right'
        },
      ]
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
  onCustomAction(event) {
    console.log(event)
  }

  
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
