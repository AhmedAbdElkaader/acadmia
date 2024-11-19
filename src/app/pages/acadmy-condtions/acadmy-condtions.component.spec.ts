import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmyCondtionsComponent } from './acadmy-condtions.component';

describe('AcadmyCondtionsComponent', () => {
  let component: AcadmyCondtionsComponent;
  let fixture: ComponentFixture<AcadmyCondtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmyCondtionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmyCondtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
