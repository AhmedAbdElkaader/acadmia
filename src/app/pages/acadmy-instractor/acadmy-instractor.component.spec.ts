import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmyInstractorComponent } from './acadmy-instractor.component';

describe('AcadmyInstractorComponent', () => {
  let component: AcadmyInstractorComponent;
  let fixture: ComponentFixture<AcadmyInstractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmyInstractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmyInstractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
