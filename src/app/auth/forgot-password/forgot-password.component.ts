import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = "";
  email;
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(private authservice: AuthService) {}

  requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.authservice
      .forgotPassword(this.user)
      .then((resp) => {
        this.submitted = false;
        this.showMessages.success = true;
        this.messages.push(
          "Revisa la bandea de entrada de: " +
            this.user.email +
            " y sigue las instrucciones para restablecer tu contraseña."
        );
      })
      .catch((err) => {
        this.submitted = false;
        this.showMessages.error = true;
        console.log(err);
        if (err.error.message.startsWith("There is no user with email address"))
          this.errors.push(
            "Correo electrónico no registrado, intenta nuevamente."
          );
        else this.errors.push("Error desconocido, intenta más tarde.");
      });
  }

  ngOnInit(): void {}
}
