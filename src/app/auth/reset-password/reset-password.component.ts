import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = "";

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  resetToken;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  resetPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.authService
      .resetPassword(this.resetToken, this.user)
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.resetToken = params.token;
    });
  }
}
