import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegisterConfirmComponent } from './course-register-confirm.component';

describe('CourseRegisterConfirmComponent', () => {
  let component: CourseRegisterConfirmComponent;
  let fixture: ComponentFixture<CourseRegisterConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegisterConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegisterConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
