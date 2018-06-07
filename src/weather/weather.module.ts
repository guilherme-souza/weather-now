import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './weather.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    WeatherComponent,
    CardGroupComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})

export class WeatherModule { }
