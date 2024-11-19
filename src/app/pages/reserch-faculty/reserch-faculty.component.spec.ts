import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchFacultyComponent } from './reserch-faculty.component';

describe('ReserchFacultyComponent', () => {
  let component: ReserchFacultyComponent;
  let fixture: ComponentFixture<ReserchFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserchFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserchFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
