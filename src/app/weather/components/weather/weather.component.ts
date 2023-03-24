import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { WeatherApiResponse } from '../../interface/weatherApi.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private http:HttpClient, private weatherService:WeatherService, private cookieService:CookieService, private formBuilder:FormBuilder,){}
  weatherData!:WeatherApiResponse;
  citySearch!: FormGroup;
  ngOnInit(): void {

    this.citySearch = this.formBuilder.group({
      city: ['']
     });

    this.weatherService.weatherRequest('Chennai').subscribe(response => {
      this.weatherData = response;
      console.log(this.weatherData.location.region);
    });

  }

  logout(){
    this.cookieService.delete('email');
    this.cookieService.delete('password');
  }

  onSubmit(){
    if(this.citySearch.value.city) {
      this.weatherService.weatherRequest(this.citySearch.value.city).subscribe(response => {
          this.weatherData = response;
          console.log(this.weatherData.location.region);
        });
    }
  }
}
