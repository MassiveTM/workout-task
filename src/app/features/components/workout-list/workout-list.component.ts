import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from './../../models/workout';
import { Exercise } from './../../models/exercise';
import { WorkoutService } from '../../services/workout.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.sass']
})
export class WorkoutListComponent implements OnInit {

  //@Output() onElementToggle: EventEmitter<Workout> = new EventEmitter<Workout>();
  @Output() onElementDelete: EventEmitter<Workout> = new EventEmitter<Workout>();

  @Input() workouts: Workout[] = [];

  public title: string = '';

  constructor(private workoutService : WorkoutService) { 
    this.title = 'Title 1';
  }

  ngOnInit(): void {
  }

   /** onToggle
   * Funzione per cambiare lo stato della riga
   */
  //public onToggle(workout: Workout) {
  // workout.done = !workout.done;
  // Emetto il valore
  // this.onElementToggle.emit(workout);
  //}

  public onDelete(workout: Workout){
    this.onElementDelete.emit(workout);
  }

  public exerciseToggle(workout: Workout) {

    var allWarkoutDone = true;
    for(var i = 0; i < workout.exercises.length ; i++) {
      if(workout.exercises[i].done == false){
        allWarkoutDone = false;
      }
    }

    workout.done = allWarkoutDone;
    
    // Persisto e aggiorno a lista
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

  public exerciseDelete(workout: Workout) {

    this.exerciseToggle(workout)
  
  }

  public addNewExercise(workout: Workout){
    this.exerciseToggle(workout);
  }

}
