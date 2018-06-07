import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGroupComponent } from './card-group.component';
import { Component, Input } from "@angular/core";
import { City } from "../city";

describe('CardGroupComponent', () => {
  @Component({selector: 'weather-card', template: '<div>STUB COMPONENT</div>'})
  class CardStubComponent {
    @Input() city: City;
  }

  let component: CardGroupComponent;
  let fixture: ComponentFixture<CardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroupComponent, CardStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create three cards', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('weather-card').length).toBe(3);
  });
});
