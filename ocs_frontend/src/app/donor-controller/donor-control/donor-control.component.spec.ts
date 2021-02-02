import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorControlComponent } from './donor-control.component';

describe('DonorControlComponent', () => {
  let component: DonorControlComponent;
  let fixture: ComponentFixture<DonorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
