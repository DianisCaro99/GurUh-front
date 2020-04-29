import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

declare var require: any

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  imgLogo= require("../../../assets/images/logo.png")
  imgname= require("../../../assets/images/buddha.png")
  imgstudent=require("../../../assets/images/student.png")
  imgschool=require("../../../assets/images/school.png")
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
