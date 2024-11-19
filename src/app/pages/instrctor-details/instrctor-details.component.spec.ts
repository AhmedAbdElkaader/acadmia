import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrctorDetailsComponent } from './instrctor-details.component';

describe('InstrctorDetailsComponent', () => {
  let component: InstrctorDetailsComponent;
  let fixture: ComponentFixture<InstrctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrctorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
