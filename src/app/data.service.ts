import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private weatherSource = new BehaviorSubject<any>('');
  currentWeather = this.weatherSource.asObservable();
  constructor() { }

  changeWeather (weatherData: any) {
    this.weatherSource.next(weatherData);
  }
}
