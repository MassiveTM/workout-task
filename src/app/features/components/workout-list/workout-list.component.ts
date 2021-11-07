import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from './../../models/workout';
import { WorkoutService } from '../../services/workout.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.sass']
})
export class WorkoutListComponent implements OnInit {

  @Output() onElementDelete: EventEmitter<Workout> = new EventEmitter<Workout>();

  @Input() workouts: Workout[] = [];

  constructor(private workoutService : WorkoutService) { 
  }

  ngOnInit(): void {
  }

  public onDelete(workout: Workout){
    this.onElementDelete.emit(workout);
  }

  public exerciseToggle(workout: Workout) {

    //AUTO SET DONE WORKOUT
    var allWarkoutDone = true;
    for(var i = 0; i < workout.exercises.length ; i++) {
      if(workout.exercises[i].done == false){
        allWarkoutDone = false;
        break;
      }
    }
    workout.done = allWarkoutDone;

    // update the workout with the new exercise
    this.workoutService.updateWorkout(workout)
      .pipe(
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe((result: Workout) => {
        if (result !== null && result !== undefined) {
          const foundIndex = this.workouts.findIndex(x => x.id === result.id);
          if (foundIndex !== -1) {
            this.workouts[foundIndex] = result;
          }
        }
      });
  }

  //if i want to delete an exercise, I'll update the same workout
  public exerciseDelete(workout: Workout) {
    this.exerciseToggle(workout)
  }

  //if i want to add a new exercise, I'll update the same workout
  public addNewExercise(workout: Workout){
    this.exerciseToggle(workout);
  }

}
