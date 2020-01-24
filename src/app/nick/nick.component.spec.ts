import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickComponent } from './nick.component';

describe('NickComponent', () => {
  let component: NickComponent;
  let fixture: ComponentFixture<NickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two parameter', () => {
    expect(component.addTwoParameters(1,3)).toEqual(4);
  });

  it('should give me shortcut', () => {
    expect(component.giveMeShortcut("Ripple")).toEqual("XRP")
  })
});
