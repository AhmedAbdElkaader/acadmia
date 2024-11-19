import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEventsComponent } from './faculty-events.component';

describe('FacultyEventsComponent', () => {
  let component: FacultyEventsComponent;
  let fixture: ComponentFixture<FacultyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
