import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = "";

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks = [];
  rememberMe = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logOut();
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    this.authService
      .login(this.user)
      .then(() => {
        this.router.navigate(["/inicio"]);
      })
      .catch((err) => {
        this.submitted = false;
        this.showMessages.error = true;
        if (err.status == 401)
          this.errors.push("Credenciales incorrectas, intenta nuevamente.");
        else this.errors.push("Error desconocido, intenta más tarde.");
      });
  }
}
