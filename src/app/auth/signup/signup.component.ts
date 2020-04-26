import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = "";

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = { terms: "" };
  socialLinks = [];

  constructor(private authService: AuthService, private router: Router) {}

  signup(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    delete this.user["terms"];
    this.authService
      .signup(this.user)
      .then(() => {
        this.router.navigate(["/inicio"]);
      })
      .catch((err) => {
        this.submitted = false;
        this.showMessages.error = true;
        if (err.error.message.startsWith("Duplicate field value:"))
          this.errors.push(
            "El correo que ingresaste ya se encuentra registrado. Por favor intenta con otro correo o inicia sesión."
          );
        else this.errors.push("Error desconocido, intenta más tarde.");
      });
  }

  ngOnInit(): void {}
}
