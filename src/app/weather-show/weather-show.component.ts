import { Component, OnInit , Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-show',
  templateUrl: './weather-show.component.html',
  styleUrls: ['./weather-show.component.css']
})
export class WeatherShowComponent implements OnInit {
  public weatherData: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentWeather.subscribe(weather => this.weatherData = weather);
  }
}
