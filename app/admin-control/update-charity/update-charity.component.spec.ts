import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCharityComponent } from './update-charity.component';

describe('UpdateCharityComponent', () => {
  let component: UpdateCharityComponent;
  let fixture: ComponentFixture<UpdateCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCharityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
