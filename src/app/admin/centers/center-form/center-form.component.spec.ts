import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterFormSimpleComponent } from './center-form.component';

describe('CenterFormSimpleComponent', () => {
  let component: CenterFormSimpleComponent;
  let fixture: ComponentFixture<CenterFormSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterFormSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
