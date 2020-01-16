import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelaberComponent } from './gelaber.component';

describe('GelaberComponent', () => {
  let component: GelaberComponent;
  let fixture: ComponentFixture<GelaberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelaberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
