import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Exercise } from '../../models/exercise';
import { Workout } from './../../models/workout';

@Component({
  selector: 'app-workout-exercise-form',
  templateUrl: './workout-exercise-form.component.html',
  styleUrls: ['./workout-exercise-form.component.sass']
})

export class WorkoutExerciseFormComponent implements OnInit {

  @Output() onNewExcercise: EventEmitter<Workout> = new EventEmitter<Workout>();
  @Input() work!: Workout;
  // Gestione form
 // Gestione form
 public myFormValidator: FormGroup = new FormGroup({});
 
 public title: string = '';

 constructor() { 
   this.createForm();
 }

 ngOnInit(): void {
 }

   public addExercise(){
     const val = this.myFormValidator.get('element')!.value;
 
     // Mettiamo in console il valore di element
     console.log('Exercise value: ' + val);
    
    if(this.work.exercises === undefined){
      this.work.exercises = [];
    }

    const exercise = {} as Exercise;
    exercise.text = val;
    exercise.done = false;
    exercise.id = this.work.exercises.length + 1;
   
      
    this.work.exercises.push(exercise);

     // Emetto il valore
     this.onNewExcercise.emit(this.work);
 
     // Pulisco valore
     this.myFormValidator.get('element')!.setValue('');
   }
 
   private createForm() {
     this.myFormValidator = new FormGroup(
       {element: new FormControl('', [Validators.required, Validators.minLength(3)])}
       );
   }
  

}
