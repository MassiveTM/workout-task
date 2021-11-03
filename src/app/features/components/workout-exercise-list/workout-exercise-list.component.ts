import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Exercise } from './../../models/exercise';
import { Workout } from './../../models/workout';


@Component({
  selector: 'app-workout-exercise-list',
  templateUrl: './workout-exercise-list.component.html',
  styleUrls: ['./workout-exercise-list.component.sass']
})
export class WorkoutExerciseListComponent implements OnInit {

  @Output() onExerciseToggle: EventEmitter<Workout> = new EventEmitter<Workout>();
  @Output() onExerciseDelete: EventEmitter<Workout> = new EventEmitter<Workout>();
  
  @Input() work!: Workout;
  

  constructor() { 
  }

  ngOnInit(): void {
  }

     /** onToggle
   * Funzione per cambiare lo stato della riga
   */
  public onToggle(exercise: Exercise) {
    this.work.exercises[this.work.exercises.lastIndexOf(exercise)].done = !exercise.done;
    // Emetto il valore
    this.onExerciseToggle.emit(this.work);
  }
    
  public onDelete(exercise: Exercise){
    this.work.exercises.splice(this.work.exercises.lastIndexOf(exercise),1);
    this.onExerciseDelete.emit(this.work);
  }

}
