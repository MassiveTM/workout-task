import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExerciseListComponent } from './workout-exercise-list.component';

describe('WorkoutExerciseListComponent', () => {
  let component: WorkoutExerciseListComponent;
  let fixture: ComponentFixture<WorkoutExerciseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutExerciseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
