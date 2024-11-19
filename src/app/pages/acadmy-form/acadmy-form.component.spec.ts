import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmyFormComponent } from './acadmy-form.component';

describe('AcadmyFormComponent', () => {
  let component: AcadmyFormComponent;
  let fixture: ComponentFixture<AcadmyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
