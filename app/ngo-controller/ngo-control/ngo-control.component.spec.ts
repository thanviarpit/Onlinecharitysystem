import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoControlComponent } from './ngo-control.component';

describe('NgoControlComponent', () => {
  let component: NgoControlComponent;
  let fixture: ComponentFixture<NgoControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
