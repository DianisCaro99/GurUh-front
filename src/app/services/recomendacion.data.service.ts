import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RecomendacionesDataService {
  constructor(private http: HttpClient) {}

  getRecomendaciones(username) {
    return this.http.get("https://guruh.herokuapp.com/predict/"+username);
  }
}
