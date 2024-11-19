import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorStudyComponent } from './bachelor-study.component';

describe('BachelorStudyComponent', () => {
  let component: BachelorStudyComponent;
  let fixture: ComponentFixture<BachelorStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BachelorStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BachelorStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
