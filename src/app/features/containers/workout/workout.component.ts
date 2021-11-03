import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from './../../models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.sass']
})
export class WorkoutComponent implements OnInit, OnDestroy {
  public workoutList: Workout[] = [];
  private destroy: Subject<boolean> = new Subject<boolean>();
  
  constructor(private workoutService : WorkoutService) { }

  ngOnInit(): void {
    this.workoutList = [];

    this.workoutService.getAllWorkout()
    .pipe(
      takeUntil(this.destroy),
      catchError(err => {
        window.alert('Errore http ' + err.message);
        throw new Error('Errore http ' + err.message);
      })
    )
    .subscribe(result => {
      this.workoutList = result;
    });
  }


  ngOnDestroy(): void {
  }

  public addNewElement(element: string) {
    const workout = {} as Workout;
    workout.text = element;
    workout.done = false;
    workout.id = this.workoutList.length + 1;

    // Persisto e aggiungo a lista
    this.workoutService.createWorkout(workout)
      .pipe(
          catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe((result: Workout) => {
        this.workoutList.push(result);
      });
  }

  public elementToggle(workout: Workout) {

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
          const foundIndex = this.workoutList.findIndex(x => x.id === result.id);
          if (foundIndex !== -1) {
            this.workoutList[foundIndex] = result;
          }
        }
      });
  }

  public elementDelete(workout: Workout) {

    // Persisto e aggiorno a lista
    this.workoutService.deleteWorkout(workout)
      .pipe(
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe((result : any) => {
        this.workoutList.splice(this.workoutList.indexOf(workout),1);
      })
  }

}
