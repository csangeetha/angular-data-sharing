import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.data.currentWeather.subscribe(weather => this.weatherData = weather);
  }

    sendToAPIXU(formValues) {
      this.apixuService.getWeather(formValues.location).subscribe(data => {
        this.weatherData = data;
        this.data.changeWeather(this.weatherData);
      });


  }


}
