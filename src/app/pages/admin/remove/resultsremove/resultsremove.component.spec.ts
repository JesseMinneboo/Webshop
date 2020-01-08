import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsremoveComponent } from './resultsremove.component';

describe('ResultsremoveComponent', () => {
  let component: ResultsremoveComponent;
  let fixture: ComponentFixture<ResultsremoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsremoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
