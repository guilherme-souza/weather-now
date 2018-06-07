import { TestBed, async } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  @Component({selector: 'weather-card-group', template: ''})
  class CardGroupStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        CardGroupStubComponent
      ],
    }).compileComponents();
  }));

  it('should create the application', async(() => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the image header in a header tag', async(() => {
    const fixture = TestBed.createComponent(WeatherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').innerHTML).toContain('data="../assets/images/logo.svg"');
  }));
});
