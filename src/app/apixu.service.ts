import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=b5af0428f6b08d43fbcce3beca9f7bde&query=" +
        location
    );
  }
}
