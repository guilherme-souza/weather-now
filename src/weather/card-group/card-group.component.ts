import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities.constants';

@Component({
  selector: 'weather-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})

export class CardGroupComponent implements OnInit {

  cities = CITIES;

  constructor() {
  }

  ngOnInit() {

  }
}
