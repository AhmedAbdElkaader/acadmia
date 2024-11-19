import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSystemComponent } from './education-system.component';

describe('EducationSystemComponent', () => {
  let component: EducationSystemComponent;
  let fixture: ComponentFixture<EducationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
