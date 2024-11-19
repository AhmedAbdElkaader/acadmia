import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNewsListingComponent } from './faculty-news-listing.component';

describe('FacultyNewsListingComponent', () => {
  let component: FacultyNewsListingComponent;
  let fixture: ComponentFixture<FacultyNewsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyNewsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyNewsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
