import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import { DebugElement } from '@angular/core';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `Antwort`', () => {
    expect(component.content).toContain('Antwort');
  })

});


