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
    delete this.user.terms;
    this.authService
      .signup(this.user)
      .toPromise()
      .then((resp) => {
        console.log("then", resp);
        this.router.navigateByUrl("./inicio");
      })
      .catch((err) => {
        console.log("err", err);
        if (
          err.message ==
          'Duplicate field value: "cahupa99@gmail.com". Please use another value!'
        ) {
          this.messages.push("El correo ya se encuentra registrado");
        } else
          this.messages.push(
            "Error desconocido, intenta nuevamente más tarde. :("
          );
      });
  }

  ngOnInit(): void {}
}
