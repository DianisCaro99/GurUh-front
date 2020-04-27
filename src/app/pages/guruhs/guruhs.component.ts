import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-guruhs",
  templateUrl: "./guruhs.component.html",
  styleUrls: ["./guruhs.component.scss"],
})
export class GuruhsComponent implements OnInit {
  constructor(private dataService: DataService) {}
  guruhs;
  ngOnInit(): void {
    this.dataService
      .getAllStudents()
      .toPromise()
      .then((resp) => {
        this.guruhs = resp["data"]["data"];
      });
  }
}
