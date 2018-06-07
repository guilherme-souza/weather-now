import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=3d8b309701a13f65b660fa2c64cdc517&q=';

  getCityWeather(cityId: string) : Observable<any> {
    const cityUrl = `${this.URL}${cityId}`;
    return this.http.get<any>(cityUrl).pipe(
      catchError(this.handleError<any>(undefined))
    );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
