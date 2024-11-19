import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchDetailsComponent } from './reserch-details.component';

describe('ReserchDetailsComponent', () => {
  let component: ReserchDetailsComponent;
  let fixture: ComponentFixture<ReserchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
