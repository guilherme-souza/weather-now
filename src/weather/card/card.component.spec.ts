import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { WeatherService } from "../weather.service";
import { of } from "rxjs/index";
import { City } from "../city";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  let getCityWeatherSpy, weatherService;

  let lowerTempResponse = {
    id: 'Nuuk,gl',
    main: {
      temp: 4,
      humidity: 75,
      pressure: 800
    },
    dt: 1492783456789
  };

  beforeEach(async(() => {
    weatherService = jasmine.createSpyObj('WeatherService', ['getCityWeather']);
    getCityWeatherSpy = weatherService.getCityWeather.and.returnValue( of (lowerTempResponse) );

    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [
        { provide: WeatherService, useValue: weatherService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.city = {
      id: 'Nuuk,gl',
      name: 'Nuuk',
      country: 'GL'
    } as City;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show temperature in blue color when temperature is lower than 5', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.temperature-blue').length).toBe(1);
    expect(compiled.querySelectorAll('.temperature-orange').length).toBe(0);
    expect(compiled.querySelectorAll('.temperature-red').length).toBe(0);
  });

  it('should show humidity and pressure', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#humidity').textContent.trim()).toBe('75%');
    expect(compiled.querySelector('#pressure').textContent.trim()).toBe('800hPa');
  });

  it('should show updated at in HH:MM:SS format', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#updatedAt').textContent).toContain('4:19:49 AM');
  });
});
