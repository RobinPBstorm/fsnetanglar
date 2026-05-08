import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanEdit } from './fan-edit';

describe('FanEdit', () => {
  let component: FanEdit;
  let fixture: ComponentFixture<FanEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(FanEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
