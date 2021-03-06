import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { RouterModule } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { WeatherShowComponent } from './weather-show/weather-show.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherShowComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
