import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmyPaymentComponent } from './acadmy-payment.component';

describe('AcadmyPaymentComponent', () => {
  let component: AcadmyPaymentComponent;
  let fixture: ComponentFixture<AcadmyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmyPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
