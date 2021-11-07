import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceModule } from '../../services/service.module';

import { WorkoutExerciseListComponent } from './workout-exercise-list.component';

describe('WorkoutExerciseListComponent', () => {
  let component: WorkoutExerciseListComponent;
  let fixture: ComponentFixture<WorkoutExerciseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServiceModule 
      ],
      declarations: [ WorkoutExerciseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
