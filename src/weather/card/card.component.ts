import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';
import { CityWeather } from '../city-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() city: City;
  weather: CityWeather = new CityWeather();

  loading: boolean = false;
  error: boolean = false;

  TEN_MINUTES: number = 600000;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.loading = true;
    this.weather = new CityWeather(); //Clean old weather information
    this.error = false; //Clean old error information

    this.weatherService.getCityWeather(this.city.id).subscribe(res => {
      if(res) {
        this.weather.temperature = res.main.temp;
        this.weather.humidity = res.main.humidity;
        this.weather.pressure = res.main.pressure;
        let time: Date = new Date(res.dt*1000);
        this.weather.updatedAt = this.getFormattedTime(time);
      } else {
        this.error = true;
      }

      this.loading = false;
      setTimeout(() => { this.getWeather(); }, this.TEN_MINUTES); //reload weather information after 10 minutes
    });
  }

  /**
   * @return time in format: hh:mm:ss AM/PM
   */
  private getFormattedTime(date: Date): string {
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    let seconds: number = date.getSeconds();

    let hoursFormatted: number = hours % 12 || 12;
    let minutesFormatted: string = minutes < 10 ? '0' + minutes : minutes.toString();
    let am: string = hours < 12 ? "AM" : "PM";

    return hoursFormatted + ':' + minutesFormatted + ':' + seconds.toString() + ' ' + am;
  }
}
