import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterFormComponent } from './center-form.component';

describe('CenterFormComponent', () => {
  let component: CenterFormComponent;
  let fixture: ComponentFixture<CenterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
