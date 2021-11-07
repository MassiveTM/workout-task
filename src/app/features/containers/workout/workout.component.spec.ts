import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceModule } from '../../services/service.module';

import { WorkoutComponent } from './workout.component';

describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServiceModule 
      ],
      declarations: [ WorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //RICFAS - Test 1
  it('should Wokouts not Be Empty', () => {
    expect(component.workoutList && component.workoutList.length > 0)
  });

});
