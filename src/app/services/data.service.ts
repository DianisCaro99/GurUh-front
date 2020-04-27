import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class DataService {
  url = "http://3.93.242.234:3000/api/v1/";

  constructor(private http: HttpClient, private authService: AuthService) {}

  generateHeaderToken() {
    return {
      headers: new HttpHeaders({
        authorization: "Bearer " + this.authService.token, 
      }),
    };
  }

  getAllContents() {
    return this.http.get(this.url + "contents", this.generateHeaderToken());
  }

  getMyContents() {
    return this.http.get(
      this.url + "preferences/myContents",
      this.generateHeaderToken()
    );
  }

  addContentPreference(id: string, category: string) {
    return this.http.post(
      this.url + "preferences/addMeContent",
      {
        id,
        category,
      },
      this.generateHeaderToken()
    );
  }

  deleteContentPreference(id: string) {
    return this.http.delete(
      this.url + "preferences/removeMeContent/" + id,
      this.generateHeaderToken()
    );
  }

  getAllStudents() {
    return this.http.get(this.url + "students", this.generateHeaderToken());
  }

  getMe() {
    return this.http.get(this.url + "users/getMe", this.generateHeaderToken());
  }
}
