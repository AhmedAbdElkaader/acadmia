import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterStudyComponent } from './master-study.component';

describe('MasterStudyComponent', () => {
  let component: MasterStudyComponent;
  let fixture: ComponentFixture<MasterStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
