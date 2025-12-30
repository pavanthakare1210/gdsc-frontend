import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthProgressComponent } from './month-progress.component';

describe('MonthProgressComponent', () => {
  let component: MonthProgressComponent;
  let fixture: ComponentFixture<MonthProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
