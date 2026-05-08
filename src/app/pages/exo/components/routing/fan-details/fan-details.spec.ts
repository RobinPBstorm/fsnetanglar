import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanDetails } from './fan-details';

describe('FanDetails', () => {
  let component: FanDetails;
  let fixture: ComponentFixture<FanDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(FanDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
