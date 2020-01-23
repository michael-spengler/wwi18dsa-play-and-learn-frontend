import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnterseiteComponent } from './unterseite.component';

describe('UnterseiteComponent', () => {
  let component: UnterseiteComponent;
  let fixture: ComponentFixture<UnterseiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnterseiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnterseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
