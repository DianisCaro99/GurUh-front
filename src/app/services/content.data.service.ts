import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContentDataService {
  constructor(private http: HttpClient) {}

  getContents() {
    return this.http.get("http://127.0.0.1:3000/api/v1/contents");
  }
}
