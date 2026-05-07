import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseAvecService } from './list-course-avec-service';

describe('ListCourseAvecService', () => {
  let component: ListCourseAvecService;
  let fixture: ComponentFixture<ListCourseAvecService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCourseAvecService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCourseAvecService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
