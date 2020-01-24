import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierQuizComponent } from './tier-quiz.component';

describe('TierQuizComponent', () => {
  let component: TierQuizComponent;
  let fixture: ComponentFixture<TierQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should return false', ()=>{
     expect(component.sum(5,3)).toEqual(8);
   });
});
