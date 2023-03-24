import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiResponse } from '../interface/weatherApi.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  weatherRequest(city:string):Observable<WeatherApiResponse>{
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com')
    .set('X-RapidAPI-Key', 'ce7afa3f97mshc2fc6b7277334d4p154ddajsn0f6cf990b167');

    const params = new HttpParams().set('q', city)

  return this.http.get<WeatherApiResponse>('https://weatherapi-com.p.rapidapi.com/current.json', {headers, params});
  }

}