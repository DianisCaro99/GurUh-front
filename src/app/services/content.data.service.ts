import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContentDataService {
  constructor(private http: HttpClient) {}

  getContents() {
    return this.http.get("http://3.93.242.234:3000/api/v1/contents");
  }
}
