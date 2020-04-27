import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  url = "http://127.0.0.1:3000/api/v1/";
  token = this.getTokenCookie();
  constructor(private http: HttpClient) {}

  getTokenCookie() {
    let token;
    document.cookie.split(";").forEach((el) => {
      if (el.startsWith("jwtGuruhApp")) {
        token = el.split("=")[1];
      }
    });
    return token;
  }

  async signup(user) {
    const resp = await this.http
      .post(this.url + "users/signup", user)
      .toPromise();
    if (resp["token"]) {
      this.token = resp["token"];
      document.cookie = `jwtGuruhApp=${resp["token"]}; expires=${resp["expiresUTC"]}; path=/;`;
    }
    return resp;
  }

  async login(user) {
    const resp = await this.http
      .post(this.url + "users/login", user)
      .toPromise();
    if (resp["token"]) {
      this.token = resp["token"];
      document.cookie = `jwtGuruhApp=${resp["token"]}; expires=${resp["expiresUTC"]}; path=/;`;
    }
    return resp;
  }

  async forgotPassword(user) {
    return await this.http
      .post(this.url + "users/forgotPassword", user)
      .toPromise();
  }

  async resetPassword(token, password) {
    const resp = await this.http
      .patch(this.url + "users/resetPassword/" + token, password)
      .toPromise();
    if (resp["token"]) {
      this.token = resp["token"];
      document.cookie = `jwtGuruhApp=${resp["token"]}; expires=${resp["expiresUTC"]}; path=/;`;
    }
    return resp;
  }

  isLoggedIn() {
    return this.token != null;
  }

  logOut() {
    this.token = null;
    document.cookie = "jwtGuruhApp=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }
}
