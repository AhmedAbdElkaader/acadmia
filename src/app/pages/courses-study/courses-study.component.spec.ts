import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesStudyComponent } from './courses-study.component';

describe('CoursesStudyComponent', () => {
  let component: CoursesStudyComponent;
  let fixture: ComponentFixture<CoursesStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
