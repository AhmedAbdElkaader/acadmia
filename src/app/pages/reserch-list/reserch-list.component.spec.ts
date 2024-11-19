import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchListComponent } from './reserch-list.component';

describe('ReserchListComponent', () => {
  let component: ReserchListComponent;
  let fixture: ComponentFixture<ReserchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
