import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  url = "http://3.93.242.234:3000/api/v1/";
  token = localStorage.getItem("jwtGuruhApp");
  constructor(private http: HttpClient) {}

  signup(user) {
    return this.http.post(this.url + "users/signup", user);
  }

  async login(user) {
    const resp = await this.http
      .request("POST", this.url + "users/login", { body: user })
      .toPromise();
    if (resp["token"]) {
      this.token = resp["token"];
      localStorage.setItem("jwtGuruhApp", resp["token"]);
    }
    return resp;
  }

  isLoggedIn() {
    return this.token != null;
  }

  logOut() {
    this.token = null;
    localStorage.removeItem("jwtGuruhApp");
  }
}
