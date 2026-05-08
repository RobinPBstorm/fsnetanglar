import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanList } from './fan-list';

describe('FanList', () => {
  let component: FanList;
  let fixture: ComponentFixture<FanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanList],
    }).compileComponents();

    fixture = TestBed.createComponent(FanList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
